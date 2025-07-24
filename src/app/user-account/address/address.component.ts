import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  manageAddress(){
    Swal.fire({
      showConfirmButton: false,
      title: "عملیات",
      html: `
<div class="d-flex gap-3 justify-content-center align-items-center">
      <div>
      <button class="btn btn-secondary rounded-3">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
      ویرایش
</button>

</div>
<div class="text-danger cursor-pointer">

      <button class="btn btn-danger rounded-3">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
   حذف
</button>

</div>
</div>
      `,
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
      }
    });
  }

  addAddress() {
    Swal.fire({
      title: 'افزودن آدرس جدید',
      html:
        `<input type="text" id="street" class="swal2-input" placeholder="Street">
         <input type="text" id="city" class="swal2-input" placeholder="City">
         <input type="text" id="state" class="swal2-input" placeholder="State">
         <input type="text" id="zip" class="swal2-input" placeholder="Zip Code">`,
      focusConfirm: false,
      preConfirm: () => {
        const street = (document.getElementById('street') as HTMLInputElement).value;
        const city = (document.getElementById('city') as HTMLInputElement).value;
        const state = (document.getElementById('state') as HTMLInputElement).value;
        const zip = (document.getElementById('zip') as HTMLInputElement).value;

        if (!street || !city || !state || !zip) {
          Swal.showValidationMessage(`Please enter all fields`);
          return;
        }

        return { street, city, state, zip };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Address:', result.value);
        Swal.fire(`Address saved!`,
          `Street: ${result.value.street}<br>
           City: ${result.value.city}<br>
           State: ${result.value.state}<br>
           Zip: ${result.value.zip}`,
          'success');
      }
    });
  }
}
