const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);
console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('businessname'));
console.log(myInfo.get('membership'));
console.log(myInfo.get('description'));
const timeStampvalue = Number(myInfo.get('timestamp'));
const realDate = new Date(timeStampvalue).toLocaleString('en-uk', {
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric',
   hour: 'numeric',
   minute: '2-digit'
});
console.log(realDate)

const formInfo = document.querySelector('#form-info').innerHTML =
   `<p>Thank you so much ${myInfo.get('firstName')} ${myInfo.get('lastName')} 
   for submitting you application on behalf of ${myInfo.get('businessname')} 
   to become members of the Timbuktu Chamber of Commerce.</p>

   <p>You have applied to become a <strong>${myInfo.get('membership')} member</strong>.</p>

   </p>We will contact you via ${myInfo.get('email')} or ${myInfo.get('phone')} 
   in three to five business days to finalize the details of your application.</p>
   
   <p>The application was submitted ${realDate}.`;