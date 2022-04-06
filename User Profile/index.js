/* 
    Create a User Profile using data from
        https://jsonplaceholder.typicode.com/users/3
    
    The User Profile must be a Flexbox container with 4 components 
        1. Profile Header
            - With the User's name and username
        2. Company
            - Displaying information about their company
        3. Contact Details
            - Contains Email/Phone/Website
        4. User Address
*/
//fetch the data from the site
async function getUser() {
  let response = await fetch(`user.json`);
  let user = await response.json();
  console.log(user);
  return user;
}
//make a get user function that changes the body based on the fetched data
getUser().then((user) => {
  document.body.innerHTML = `<div id="user-profile">
  <div id="user-profile-header">
  <div> Name: ${user.name} </div>
  <div> Username: @${user.username}</div>
  </div>
  <div id="user-profile-company">
  <div> Company Name: ${user.company.name}</div>
  <div> Company Type: ${user.company.type}</div>
  <div> Catchphrase: ${user.company.catchPhrase}</div>
  </div>
  <div id="user-profile-contact">
  <div>📧${user.email}</div>
  <div>☎️${user.phone}</div>
  <div>💻${user.website}</div>
  </div>
  <div id="user-profile-address">
  <div> City: ${user.address.city}</div>
  <div> Street: ${user.address.street}</div>
  <div> Zipcode: ${user.address.zipcode}</div>
  </div>`;
});
