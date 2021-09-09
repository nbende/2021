import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewserviceService } from 'src/app/Services/newservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rabbitmq',
  templateUrl: './rabbitmq.component.html',
  styleUrls: ['./rabbitmq.component.css']
})
export class RabbitmqComponent implements OnInit {
  flag5: boolean;
  compliant = [];
  ComplaintCategory: FormGroup;
  editcomplaint: FormGroup;
  showDialog: boolean;
  submitted: boolean;
  flag: boolean;
  constructor(private newserv: NewserviceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ComplaintCategory = this.formBuilder.group({
      complaintId: ['', Validators.required],
      complaintName: ['', Validators.required],
      complaintOnEmployee: ['', Validators.required]
    });
    // this.editcomplaint=this.formBuilder.group({
    //   id:[],
    //   complaintName: ['', Validators.required],
    //   complaintOnEmployee:['',Validators.required]
    // })
    this.GetRabbit();
  }
  dilog() {
    debugger
    this.showDialog = true;
    this.submitted = false;
    // this.ComplaintCategory.reset();
  }
  popupClosed() {
    this.showDialog = false;
  }

  GetRabbit() {
    debugger
    this.flag5 = false;
    this.newserv.GetComplaintMode().subscribe((data: any) => {
      this.compliant.push(data);
    });
  }
  onSubmit() {
    debugger
    this.newserv.AddMode(this.ComplaintCategory).subscribe((result) => {
      // if (result.item1 == true) {
      //   this.GetComplaints();
      // }
      if (result == true) {
        // this.Esignature = false;
        this.GetRabbit();
        Swal.fire({
          icon: 'success',
          title: 'Created successfully',
          showConfirmButton: true,
        })
      }
      else if (result == "DbNOtSaved") {
        this.GetRabbit();
        Swal.fire({
          icon: 'warning',
          title: 'Something Went Wrong',
          showConfirmButton: true,
        })
      }


    }, (err) => {
      console.log(err);
    });

    this.newserv.AddMode(this.editcomplaint.value).subscribe((result: any) => {
      if (result.item1 == true) {
        //this.Esignature = false;
        this.GetRabbit();
        Swal.fire({
          icon: 'success',
          title: 'Updated successfully',
          showConfirmButton: true,
        })

      }
      else if (result.item1 == false) {
        //  this.Esignature = false;
        this.GetRabbit();
        Swal.fire({
          icon: 'warning',
          title: 'Something Went Wrong',
          showConfirmButton: true,
        })
      }

      //  this.flagEsignUpdate = false;

    }, (err) => {
      console.log(err);
    });

    this.editcomplaint.reset();
  }
  AddMessage() {
    debugger
    this.submitted = true;
    this.flag = true;
    // if (this.ComplaintCategory.invalid) {
    //   this.showDialog = true;
    //   //this.Esignature = false;
    // }

    this.newserv.AddMode(this.ComplaintCategory.value).subscribe((result: any) => {

      debugger
      if (result == "" || result == "Created Sucessfully" || result == undefined) {
        this.showDialog = false;
        Swal.fire({
          icon: 'success',
          title: 'Created successfully',
          showConfirmButton: true,
        })
        this.GetRabbit();
      }
    });
  }
}
