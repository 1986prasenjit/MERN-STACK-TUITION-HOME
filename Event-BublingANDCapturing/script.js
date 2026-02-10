// 1. Get the parent element
const itemList = document.getElementById("item-list");

// 2. Add listener to parent
itemList.addEventListener("click", (event) => {
  // 3. Check if the clicked element is an <li>
  if (event.target.tagName === "LI") {
    // 4. Handle the event (e.g., log text)
    console.log(`Clicked: ${event.target.id}`);
  }
});
//Shirts --> id.size, id.color, id.brand
//<li>{`${item.size}`}</li>
//<li>{`${item.color}`}</li>
//<li>{`${item.brand}`}</li>

//CALL, APPLY, BIND


const product = [
{
  id:1,
  size: "XL",
  color: "Red",
  brand: "Puma"
}, 
{
  id:2,
  size: "XXL",
  color: "Orange",
  brand: "Levis"
}, 
{
  id:3,
  size: "XXL",
  color: "Yellow",
  brand: "Adidas"
}, 
]