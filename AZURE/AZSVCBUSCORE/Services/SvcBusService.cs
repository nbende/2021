using AZSVCBUSCORE.Models;
using Microsoft.Azure.ServiceBus;
using Microsoft.Extensions.Configuration; // IConfiguration
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace AZSVCBUSCORE.Services
{
    public class SvcBusService
    {
        private readonly IConfiguration _config;

        public SvcBusService(IConfiguration config)
        {
            _config = config;
        }

        public async Task PostMessageAsync(Order serviceBusMessage, string queueName)
        {
            var queueClient = new QueueClient(_config.GetConnectionString("AzSvcBus"), queueName);
            // we convert the anonymous obj to a json
            var msgBody = JsonSerializer.Serialize(serviceBusMessage);
            var msg = new Message(Encoding.UTF8.GetBytes(msgBody));
            await queueClient.SendAsync(msg);
        }
    }
}
