using Microsoft.Azure.ServiceBus;
using System;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace SVCBUSClnt
{
    class Program
    {
        const string connectionString = "Endpoint=sb://orderq.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=6CmBEc3ufkGqhwiT2pC2kbNgNHc6pu9RCMWpFDqBKnk=";
        const string queueName = "Ordersq";
        static IQueueClient queueClient;
        static async Task Main(string[] args)
        {
            queueClient = new QueueClient(connectionString, queueName);
            var msgHandlerOptions = new MessageHandlerOptions(ExceptionReceivedHandler)
            {
                // how many messages we want to process at a time
                MaxConcurrentCalls = 1,
                // needs to wait until the message is processed not only read
                AutoComplete = false
            };

            // register a method handler, this is the method that is going to be called when there is a new message
            // this method will stay and run in the background
            queueClient.RegisterMessageHandler(ProcessMessageAsync, msgHandlerOptions);
            Console.ReadLine();
            await queueClient.CloseAsync();
        }

        private static async Task ProcessMessageAsync(Message msg, CancellationToken token)
        {
            var jsonString = Encoding.UTF8.GetString(msg.Body);
            var order = JsonSerializer.Deserialize<Order>(jsonString);

            Console.WriteLine($"Order confirmed :  {order.Title} {order.price} Email: {order.OrderCode}");
            await queueClient.CompleteAsync(msg.SystemProperties.LockToken);
        }

        private static Task ExceptionReceivedHandler(ExceptionReceivedEventArgs arg)
        {
            Console.WriteLine($"Message Handler Exception: {arg.Exception}");
            return Task.CompletedTask;
        }
    }
}
