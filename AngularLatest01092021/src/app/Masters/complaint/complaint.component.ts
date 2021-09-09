import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplaintSeviceService } from 'src/app/Services/complaint-sevice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  ComplaintCategory: FormGroup;
  editcomplaint:FormGroup;
  compliant1: any[];
  showDialog: boolean;
  submitted: boolean;
  flag5: boolean;
  flag: boolean;
  showDialog1: boolean;
  compliantModenn = { id: 1, complaintName: "", complaintOnEmployee:"",comments: "" };
  EditData: any;
  constructor(private complaintser: ComplaintSeviceService,private formBuilder: FormBuilder) { }
  

  ngOnInit(): void {
    this.ComplaintCategory = this.formBuilder.group({
      complaintName: ['', Validators.required],
      ComplaintOnEmployee:['',Validators.required]
    });
    this.editcomplaint=this.formBuilder.group({
      id:[],
      complaintName: ['', Validators.required],
      complaintOnEmployee:['',Validators.required]
    })
    this.GetComplaints();
  }

GetComplaints(){
  debugger
  this.flag5 = false;
  this.complaintser.GetComplaintMode().subscribe((data: any) => {
    this.compliant1 = data;
    // for (var i = 0; i < this.compliant1.length; i++) {

    //   if (this.compliant1[i].status == 3) {
    //     this.compliant1[i].status = "Enable";
    //   }
    //   else if (this.compliant1[i].status == 4) {
    //     this.compliant1[i].status = "Disable";
    //   }

    // }
  });

}
dilog() {
debugger
  this.showDialog = true;
  this.submitted = false;
  this.ComplaintCategory.reset();
}
// close(){
//   this.showDialog=false;
// }
onSubmit(){
  debugger
  this.complaintser.AddMode(this.ComplaintCategory).subscribe((result) => {
    // if (result.item1 == true) {
    //   this.GetComplaints();
    // }
    if (result == true) {
     // this.Esignature = false;
      this.GetComplaints();
      Swal.fire({
        icon: 'success',
        title: 'Created successfully',
        showConfirmButton: true,
      })
    }
    else if (result == "DbNOtSaved") {
      this.GetComplaints();
      Swal.fire({
        icon: 'warning',
        title: 'Something Went Wrong',
        showConfirmButton: true,
      })
    }


  }, (err) => {
    console.log(err);
  });
  
  this.complaintser.AddMode(this.editcomplaint.value).subscribe((result: any) => {
    if (result.item1 == true) {
      //this.Esignature = false;
      this.GetComplaints();
      Swal.fire({
        icon: 'success',
        title: 'Updated successfully',
        showConfirmButton: true,
      })

    }
    else if (result.item1 == false) {
    //  this.Esignature = false;
      this.GetComplaints();
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
popupClosed(){
  this.showDialog=false;
}
AddComplaintModes() {
debugger
  this.submitted = true;
  this.flag = true;
  // if (this.ComplaintCategory.invalid) {
  //   this.showDialog = true;
  //   //this.Esignature = false;
  // }

  this.complaintser.AddMode(this.ComplaintCategory.value).subscribe((result: any) => {

debugger
if(result == "" || result =="Created Sucessfully" || result == undefined){
  this.showDialog=false;
  Swal.fire({
    icon: 'success',
    title: 'Created successfully',
    showConfirmButton: true,
  })
  this.GetComplaints();
}

    // if (result == "Already Exist") {
    //   this.flag = false;
    //   this.showDialog = true;
    //   this.submitted = true;
    //   this.ComplaintCategory.reset();
    // }
    // else if (result == "") {
    //   if (this.ComplaintCategory.invalid) {
    //     this.showDialog = true;
    //     //this.Esignature = false;
    //   }

    //   else {
    //     Swal.fire({
    //       title: 'Do you want to create?',

    //       icon: 'info',
    //       showCancelButton: true,
    //       confirmButtonColor: '#8CD4F5',
    //       cancelButtonColor: '#C1C1C1',
    //       confirmButtonText: 'Yes',
    //       cancelButtonText: 'No'
    //     }).then((result) => {
    //       if (result.value) {
    //         this.showDialog = false;
    //        // this.flagEsignCreate = true;
    //        // this.Esignature = true;
    //       }
    //       else {
    //         this.showDialog = true;
    //       }
    //     })
    //   }
    // }
  });
}

Edit(id){
debugger
this.complaintser.GetComplaintsById(id).subscribe((data:any)=>{
  debugger
  this.EditData=data;
  this.editcomplaint.controls['id'].setValue(this.EditData.id);
  this.editcomplaint.controls['complaintName'].setValue(this.EditData.complaintName);
  this.editcomplaint.controls['complaintOnEmployee'].setValue(this.EditData.complaintOnEmployee);
  
})
}
Update(){
debugger
this.complaintser.AddMode(this.editcomplaint.value).subscribe((result: any) => {
  debugger
  if (result == "" || result =="Updated Sucessfully" || result == undefined) {
    //this.Esignature = false;
    this.showDialog1=false
    this.GetComplaints();
    Swal.fire({
      icon: 'success',
      title: 'Updated successfully',
      showConfirmButton: true,
    })

  }

  // if (result.item2 == "Already Exists") {

  //   this.showDialog1 = true;
  //   this.submitted = true;
  //   // this.showalready = true;
  //   // this.showNoChanges = false;
  // }
  // else if (result.item2 == " No Changes Found") {
  //  // this.showNoChanges = true;
  //   this.showDialog1 = true;
  //   this.submitted = true;
  //  // this.showalready = false;
  // }
  // else if (result.item2 == "") {
  //   if (this.editcomplaint.invalid) {
  //     this.showDialog1 = true;
  //     //this.Esignature = false;
  //   }

    // else {
    //   this.showDialog1 = false;
    //   Swal.fire({
    //     title: 'Do you want to update?',

    //     icon: 'info',
    //     showCancelButton: true,
    //     confirmButtonColor: '#8CD4F5',
    //     cancelButtonColor: '#C1C1C1',
    //     confirmButtonText: 'Yes',
    //     cancelButtonText: 'No'
    //   }).then((result) => {
    //     if (result.value) {
    //       this.showDialog1 = false;
    //       // this.flagEsignUpdate = true;
    //       // this.Esignature = true;
    //     }
    //     else {
    //       this.showDialog1 = true;
    //     }
    //   })

    // }

  //}
});
}
GetComplaintById(Id) {
  // this.validationmsg = "";
  // this.showalready = false;
  // this.showNoChanges = false;
  this.complaintser.GetComplaintsById(Id).subscribe((data: any) => {
    this.compliantModenn = data;

   // this.status = data.status;
    // if (this.status == 3) {
    //   this.ischeckedWithOutBoolean = true;
    //   this.readonlyFlag = false;
    //   this.editcomplaintMode.controls['Id'].enable();
    // }
    // else if (this.status == 4) {
    //   this.validationmsg = this.gservice.validationMessage;
    //   this.ischeckedWithOutBoolean = false;
    //   this.readonlyFlag = true;
    //   this.showEnable = true;
    //   this.flag = true;
    //   this.submitted = true;
    //   this.editcomplaintMode.controls['Id'].enable();
    // }

  });
}
}
