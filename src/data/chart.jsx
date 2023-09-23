export const data = [
  { name: "March", Total: 125 },
  { name: "April", Total: 2125 },
  { name: "May", Total: 755 },
  { name: "June", Total: 4125 },
  { name: "July", Total: 3125 },
  { name: "March", Total: 4125 }
];

export const rows = [
  {
    id: 1,
    title: "March",
    img: "./images/user.jpg",
    date: "20 April",
    customer: "Mary Smith",
    method: "Online",
    status: "Approved",
    amount: 125
  },
  {
    id: 2,
    title: "March",
    img: "./images/user.jpg",
    date: "20 April",
    customer: "Jeo Deo",
    method: "By cash on delivery",
    status: "Pending",
    amount: 125
  },
  {
    id: 3,
    title: "March",
    img: "./images/user.jpg",
    date: "20 April",
    customer: "Jeo Deo",
    method: "By cash on delivery",
    status: "Approved",
    amount: 125
  },
  {
    id: 4,
    title: "March",
    img: "./images/user.jpg",
    date: "20 April",
    customer: "Jeo Deo",
    method: "Online",
    status: "Pending",
    amount: 125
  }
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithTable">
          <img className="cellImg" src={params.row.imgUrl} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 70 },
  {
    field: "status",
    headerName: "Status",
    width: 170,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    }
  }
];

export const userRows = [
  {
    id: 1,
    username: "Smith Know",
    imgUrl: "./images/user.jpg",
    status: "active",
    email: "smith34@gmail.com",
    age: 25
  },
  {
    id: 2,
    username: "Paula Thomas",
    imgUrl: "./images/staff-3.jpg",
    status: "pending",
    email: "smith34@gmail.com",
    age: 42
  },
  {
    id: 3,
    username: "Mary Smith",
    imgUrl: "./images/staff-5.jpg",
    status: "passive",
    email: "smith34@gmail.com",
    age: 45
  },
  {
    id: 4,
    username: "Andrew Phil",
    imgUrl: "./images/staff-2.jpg",
    status: "active",
    email: "smith34@gmail.com",
    age: 16
  }
];

export const userInput = [
  {
    id: 1,
    lable: "Username",
    type: "text",
    placeholder: "Mary_Smith"
  },
  {
    id: 2,
    lable: "Full Name",
    type: "text",
    placeholder: "Mary_Smith"
  },
  {
    id: 3,
    lable: "Email",
    type: "email",
    placeholder: "mary25@gmail.com"
  },
  {
    id: 4,
    lable: "Password",
    type: "password"
  },
  {
    id: 5,
    lable: "Address",
    type: "text",
    placeholder: "147 Street Park London 36"
  },
  {
    id: 6,
    lable: "Phone",
    type: "text",
    placeholder: "+441 250 000 11"
  },
  {
    id: 7,
    lable: "Country",
    type: "text",
    placeholder: "UK"
  }
];

export const productInput = [
  {
    id: 1,
    lable: "Title",
    type: "text",
    placeholder: "iPhone 14 Pro Max"
  },
  {
    id: 2,
    lable: "Description",
    type: "text",
    placeholder: "Description"
  },
  {
    id: 3,
    lable: "Category",
    type: "text",
    placeholder: "Tech"
  },
  {
    id: 4,
    lable: "Price",
    type: "text",
    placeholder: "400"
  },
  {
    id: 5,
    lable: "Stock",
    type: "text",
    placeholder: "in stock"
  }
];
