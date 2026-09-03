// ============================================================
// إعدادات المنتجات - عدّل الأسماء والأسعار من هنا
// ============================================================

const products = {
  cafe: [
    { id: "Pepsi", name: "كولا 330", price: 80, image:"./assets/img/Pepsi.jpg" },
    { id: "7up", name: "كولا 250", price: 70, image:"./assets/img/7up.png" },
    { id: "Matte", name: "متة", price: 50, image:"./assets/img/matteh.png"},
    { id: "HotChocolate", name: "هوت شوكليت", price: 60, image:"./assets/img/HotChocolate.png" },
    { id: "Arkela", name: "خدمة اركيلة", price: 50, image:"./assets/img/Arkela.png"},
    { id: "Indomi", name: "اندومي", price: 70 ,image:"./assets/img/Indomi.png"},
    { id: "Nescafe3*1", name: "3*1", price: 80 ,image:"./assets/img/Nescafe.jpg"},
    { id: "Water", name: "مياه", price: 40 ,image:"./assets/img/Water.png"},
    { id: "Mokarmeshat", name: "مقرمشات", price: 100 ,image:"./assets/img/Mokarmeshat.png"},
    { id: "Coffee", name: "قهوة حلوة", price: 100 ,image:"./assets/img/Coffee.png"},
    { id: "Juice", name: "عصير طبيعي", price: 75 ,image:"./assets/img/Juice.png"},
    { id: "Service", name: "خدمة طاولة", price: 50 ,image:"./assets/img/service.png"},
    { id: "Tea", name: "شاي", price: 50 ,image:"./assets/img/Tea.png"},
    { id: "New", name: "تجديد ابريق", price: 20 ,image:"./assets/img/New.png"},
    { id: "Energy", name: "طاقة", price: 150 ,image:"./assets/img/Energy.jpg"},
    { id: "Fastcoffee", name: "كامبو سريعة", price: 50 ,image:"./assets/img/FastCoffee.jpg"},
    { id: "Icecoffee", name: "آيس كوفي", price: 120 ,image:"./assets/img/IceCoffee.png"},
    { id: "kammonwlimon", name: "كمون وليمون", price: 50 ,image:"./assets/img/Kammonwlimon.jpg"},
    { id: "Rani", name: "راني", price: 100 ,image:"./assets/img/Rani.png"}
  ],
  pastry: [
    { id: "Falafel", name: "فلافل", price: 100 ,image:"./assets/img/Falafel.jpg"},
    { id: "cheese50", name: "محمرة", price: 50 ,image:"./assets/img/Mohammarah.webp"},
    { id: "cheese51", name: "زعتر", price: 50 ,image:"./assets/img/Zaatar.jpg"},
    { id: "cheese52", name: "محمرة وزعتر", price: 60 ,image:"./assets/img/Mohzat.webp"},
    { id: "cheese53", name: "زيتون", price: 50 ,image:"./assets/img/Zayton.jpg"},
    { id: "cheese54", name: "جبنة", price:80 ,image:"./assets/img/Cheese.jpeg"},
    { id: "cheese55", name: "محمرة وجبنة", price: 100 ,image:"./assets/img/Cheese3.jpeg"},
    { id: "cheese56", name: "مرتديلا وجبنة", price: 100 ,image:"./assets/img/cheese1.jpeg"},
    { id: "cheese57", name: "زعتر وجبنة", price: 100 ,image:"./assets/img/Cheese2.jpeg"},
    { id: "cheese58", name: "جبنة (فطر، ذرة، زيتون)", price: 100 ,image:"./assets/img/Cheese4.jpeg"},
    { id: "cheese59", name: "محمرة وجبنة ومرتديلا", price: 130 ,image:"./assets/img/MohChesMar.jpg"},
    { id: "cheese60", name: "جبنة ومرتديلا (وآخر)", price: 130 ,image:"./assets/img/MohChesOth.jpg"},
    { id: "cheese61", name: "محمرة جبنة فطر ذرة", price: 140 ,image:"./assets/img/Pizza.jpg"},
    { id: "cheese62", name: "Nafas", price: 200 ,image:"./assets/img/Nafas.jpg"},
    { id: "cheese63", name: "فرن", price: 150 ,image:"./assets/img/PizzaFrn.webp"},
    { id: "cheese64", name: "فرن", price: 180 ,image:"./assets/img/PizzaFrn.webp"},
    { id: "cheese65", name: "فرن", price: 250 ,image:"./assets/img/PizzaFrn.webp"},
    { id: "cheese66", name: "بيتزا صغير", price: 130 ,image:"./assets/img/PizzaMini.jpg"},
    { id: "cheese67", name: "بيتزا وسط", price: 250 ,image:"./assets/img/PizzaMed.jpg"},
    { id: "cheese68", name: "بيتزا كبير", price: 600 ,image:"./assets/img/PizzaLarge.jpg"},
    { id: "cheese69", name: "بيتزا لحومات", price: 300 ,image:"./assets/img/Pizza4season.jpeg"},
    { id: "Sandwich100", name: "بطاطا صغير", price: 100 ,image:"./assets/img/Botetto.webp"},
    { id: "Sandwich101", name: "بطاطا", price: 150 ,image:"./assets/img/Botetto.jpeg"},
    { id: "Sandwich102", name: "فاهيتا", price: 250 ,image:"./assets/img/Sandwich.jpg"},
    { id: "Sandwich103", name: "شاورما", price: 250 ,image:"./assets/img/Shawermeh.webp"},
    { id: "Sandwich104", name: "مكسيكي", price: 250 ,image:"./assets/img/Sandwich.jpg"},
    { id: "Sandwich105", name: "فرانشيسكو", price: 250 ,image:"./assets/img/Sandwich.jpg"},
    { id: "Sandwich106", name: "شيش طاووق", price: 250 ,image:"./assets/img/Sheesh.webp"}

  ]
};

const TABLE_COUNT=20,STORAGE_KEY="cafeOrderSystem_v1",SALES_KEY="cafeSales_v1";
let state=loadState(),sales=loadSales(),selectedTableId=null,selectedCategory="cafe";

const tablesSection=document.getElementById("tablesSection"),orderSection=document.getElementById("orderSection");
const tablesGrid=document.getElementById("tablesGrid"),openTablesCount=document.getElementById("openTablesCount");
const selectedTableTitle=document.getElementById("selectedTableTitle"),lastOrderTime=document.getElementById("lastOrderTime");
const customerName=document.getElementById("customerName"),productsGrid=document.getElementById("productsGrid");
const productsTitle=document.getElementById("productsTitle"),customProductPanel=document.getElementById("customProductPanel");
const customTitle=document.getElementById("customTitle"),customName=document.getElementById("customName"),customPrice=document.getElementById("customPrice");
const cartItems=document.getElementById("cartItems"),grandTotal=document.getElementById("grandTotal"),itemCount=document.getElementById("itemCount");
const salesDialog=document.getElementById("salesDialog"),salesList=document.getElementById("salesList"),invoiceCount=document.getElementById("invoiceCount"),salesTotal=document.getElementById("salesTotal"),toast=document.getElementById("toast");

init();
function init(){
renderTables();renderProducts();
document.getElementById("salesBtn").addEventListener("click",openSalesDialog);
document.getElementById("closeDialogBtn").addEventListener("click",()=>salesDialog.close());
document.getElementById("backBtn").addEventListener("click",showTables);
document.getElementById("closeTableBtn").addEventListener("click",closeTable);
document.getElementById("addCustomBtn").addEventListener("click",addCustomProduct);
document.querySelectorAll(".category-btn").forEach(b=>b.addEventListener("click",()=>{selectedCategory=b.dataset.category;document.querySelectorAll(".category-btn").forEach(x=>x.classList.toggle("active",x===b));renderProducts()}));
customerName.addEventListener("input",updateCustomerName);
document.getElementById("exportBtn").addEventListener("click",exportCSV);
document.getElementById("clearSalesBtn").addEventListener("click",clearSales);
window.addEventListener("beforeunload",()=>{saveState();saveSales()});
}

function renderTables(){
tablesGrid.innerHTML="";let open=0;
for(let i=1;i<=TABLE_COUNT;i++){const t=getTable(i),isOpen=t.items.length>0||t.customerName;if(isOpen)open++;
const card=document.createElement("div");card.className=`table-card ${isOpen?"open":""}`;
card.innerHTML=`<div class="table-number">طاولة ${i}</div><div class="table-status">${isOpen?escapeHTML(t.customerName||"مفتوحة"):"فارغة"}</div>${isOpen?`<div class="table-total">${formatMoney(calculateTotal(t.items))}</div>`:""}`;
card.addEventListener("click",()=>openTable(i));tablesGrid.appendChild(card)}
openTablesCount.textContent=`${open} مفتوحة`;
}
function getTable(id){if(!state.tables[id])state.tables[id]={customerName:"",items:[],lastOrderTime:null};return state.tables[id]}
function openTable(id){selectedTableId=id;const t=getTable(id);tablesSection.classList.add("hidden");orderSection.classList.remove("hidden");selectedTableTitle.textContent=`طاولة ${id}`;customerName.value=t.customerName||"";updateLastOrderTime(t.lastOrderTime);renderCart();renderProducts();window.scrollTo({top:0,behavior:"smooth"})}
function showTables(){selectedTableId=null;orderSection.classList.add("hidden");tablesSection.classList.remove("hidden");customProductPanel.classList.add("hidden");customName.value="";customPrice.value="";renderTables();window.scrollTo({top:0,behavior:"smooth"})}
function updateCustomerName(){if(!selectedTableId)return;getTable(selectedTableId).customerName=customerName.value.trim();saveState();renderTables()}
function updateLastOrderTime(t){lastOrderTime.textContent=t?`آخر طلب: ${formatDateTime(t)}`:"آخر طلب: لا يوجد"}

function renderProducts(){
const list=products[selectedCategory];productsTitle.textContent=selectedCategory==="cafe"?"منتجات الكافيه":"منتجات الفطائر";productsGrid.innerHTML="";
list.forEach(p=>{const qty=getCurrentQty(p),card=document.createElement("button");card.type="button";card.className="product-card";
card.innerHTML=`<img class="product-image" src="${escapeAttribute(p.image)}" alt="${escapeAttribute(p.name)}" onerror="this.src='https://placehold.co/600x480?text=Product'"><div class="product-info"><span class="product-name">${escapeHTML(p.name)}</span><span class="product-price">${formatMoney(p.price)}</span>${qty>0?`<span class="product-qty">العدد: ${qty}</span>`:""}</div>`;
card.addEventListener("click",()=>addItem(p));productsGrid.appendChild(card)});
const other=document.createElement("button");other.type="button";other.className="product-card";other.innerHTML=`<img class="product-image" src="https://placehold.co/600x480?text=Other" alt="أخرى"><div class="product-info"><span class="product-name">أخرى...</span><span class="product-price">إدخال يدوي</span></div>`;
other.addEventListener("click",()=>{customTitle.textContent=selectedCategory==="cafe"?"إضافة منتج كافيه آخر":"إضافة فطيرة أخرى";customProductPanel.classList.remove("hidden");customName.focus()});productsGrid.appendChild(other);
}
function getCurrentQty(p){if(!selectedTableId)return 0;const i=getTable(selectedTableId).items.find(x=>x.id===p.id&&x.name===p.name&&x.price===p.price);return i?i.qty:0}
function addItem(p){if(!selectedTableId){showToast("اختر طاولة أولًا");return}const t=getTable(selectedTableId),e=t.items.find(x=>x.id===p.id&&x.name===p.name&&x.price===p.price);e?e.qty++:t.items.push({id:p.id,name:p.name,price:Number(p.price),qty:1});t.lastOrderTime=new Date().toISOString();saveState();updateLastOrderTime(t.lastOrderTime);renderCart();renderProducts();renderTables();showToast(`تمت إضافة ${p.name}`)}
function addCustomProduct(){if(!selectedTableId)return;const name=customName.value.trim(),price=Number(customPrice.value);if(!name||!Number.isFinite(price)||price<0){showToast("أدخل اسم المنتج والسعر بشكل صحيح");return}addItem({id:`custom-${Date.now()}`,name,price});customName.value="";customPrice.value="";customProductPanel.classList.add("hidden")}

function renderCart(){if(!selectedTableId)return;const t=getTable(selectedTableId);cartItems.innerHTML="";
if(!t.items.length)cartItems.innerHTML='<div class="empty">لا توجد طلبات لهذه الطاولة</div>';
else t.items.forEach((item,index)=>{const row=document.createElement("div");row.className="cart-item";row.innerHTML=`<div><div class="item-name">${escapeHTML(item.name)}</div><div class="item-price">السعر الفردي: ${formatMoney(item.price)}</div><div class="quantity-controls"><button class="qty-btn decrease">−</button><strong>${item.qty}</strong><button class="qty-btn increase">+</button><button class="remove-btn">حذف</button></div></div><div class="item-total">${formatMoney(item.price*item.qty)}</div>`;row.querySelector(".decrease").onclick=()=>changeQty(index,-1);row.querySelector(".increase").onclick=()=>changeQty(index,1);row.querySelector(".remove-btn").onclick=()=>removeItem(index);cartItems.appendChild(row)});
const total=calculateTotal(t.items),count=t.items.reduce((s,i)=>s+i.qty,0);grandTotal.textContent=formatMoney(total);itemCount.textContent=`${count} قطعة`}
function changeQty(i,a){const t=getTable(selectedTableId);if(!t.items[i])return;t.items[i].qty+=a;if(t.items[i].qty<=0)t.items.splice(i,1);t.lastOrderTime=new Date().toISOString();saveState();updateLastOrderTime(t.lastOrderTime);renderCart();renderProducts();renderTables()}
function removeItem(i){const t=getTable(selectedTableId);t.items.splice(i,1);t.lastOrderTime=new Date().toISOString();saveState();updateLastOrderTime(t.lastOrderTime);renderCart();renderProducts();renderTables()}
function calculateTotal(items){return items.reduce((s,i)=>s+i.price*i.qty,0)}

function closeTable(){if(!selectedTableId)return;const t=getTable(selectedTableId);if(!t.items.length){showToast("لا يمكن إغلاق طاولة بدون طلبات");return}
if(!confirm(`إغلاق الطاولة ${selectedTableId} وتسجيل الفاتورة بقيمة ${formatMoney(calculateTotal(t.items))}؟`))return;
const invoice={id:`INV-${Date.now()}`,table:selectedTableId,customerName:t.customerName||"غير محدد",date:new Date().toISOString(),items:t.items.map(i=>({...i})),total:calculateTotal(t.items)};
sales.unshift(invoice);saveSales();state.tables[selectedTableId]={customerName:"",items:[],lastOrderTime:null};saveState();showToast("تم تسجيل الفاتورة وإغلاق الطاولة");showTables()}

function openSalesDialog(){renderSales();salesDialog.showModal()}
function renderSales(){invoiceCount.textContent=sales.length;salesTotal.textContent=formatMoney(sales.reduce((s,x)=>s+x.total,0));salesList.innerHTML="";
if(!sales.length){salesList.innerHTML='<div class="empty">لا يوجد سجل مبيعات حتى الآن</div>';return}
sales.forEach(s=>{const card=document.createElement("div");card.className="sale-card";const items=s.items.map(i=>`${escapeHTML(i.name)} × ${i.qty} = ${formatMoney(i.price*i.qty)}`).join("<br>");
card.innerHTML=`<div class="sale-top"><span>طاولة ${s.table}</span><span>${formatDateTime(s.date)}</span></div><div class="item-price">الزبون: ${escapeHTML(s.customerName)}</div><div class="sale-items">${items}</div><div class="sale-footer"><div class="sale-total">${formatMoney(s.total)}</div><button class="delete-sale-btn">حذف هذه الفاتورة</button></div>`;
card.querySelector(".delete-sale-btn").onclick=()=>deleteSale(s.id);salesList.appendChild(card)})}
function deleteSale(id){const s=sales.find(x=>x.id===id);if(!s)return;if(!confirm(`حذف فاتورة طاولة ${s.table} بقيمة ${formatMoney(s.total)} من سجل المبيعات؟`))return;sales=sales.filter(x=>x.id!==id);saveSales();renderSales();showToast("تم حذف الفاتورة من السجل")}
function exportCSV(){if(!sales.length){showToast("لا يوجد سجل لتصديره");return}const rows=[["رقم الفاتورة","التاريخ","الطاولة","اسم الشخص","المنتج","الكمية","السعر الفردي","إجمالي المادة","إجمالي الفاتورة"]];sales.forEach(s=>s.items.forEach(i=>rows.push([s.id,formatDateTime(s.date),s.table,s.customerName,i.name,i.qty,i.price,i.price*i.qty,s.total])));const csv="\uFEFF"+rows.map(r=>r.map(csvEscape).join(",")).join("\r\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`cafe-sales-${new Date().toISOString().slice(0,10)}.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);showToast("تم تصدير سجل المبيعات")}
function clearSales(){if(!sales.length){showToast("السجل فارغ أصلًا");return}if(!confirm("تحذير: سيتم حذف سجل المبيعات المحفوظ على هذا الجهاز نهائيًا. هل أنت متأكد؟"))return;sales=[];saveSales();renderSales();showToast("تم حذف سجل المبيعات")}

function loadState(){try{const x=localStorage.getItem(STORAGE_KEY);if(x)return JSON.parse(x)}catch(e){}return{tables:{}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function loadSales(){try{const x=localStorage.getItem(SALES_KEY);return x?JSON.parse(x):[]}catch(e){return[]}}
function saveSales(){localStorage.setItem(SALES_KEY,JSON.stringify(sales))}
function formatMoney(v){return `${Number(v).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})} ل.س`}
function formatDateTime(v){return new Date(v).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}
function csvEscape(v){return `"${String(v??"").replace(/"/g,'""')}"`}
function escapeHTML(v){return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
function escapeAttribute(v){return escapeHTML(v)}
function showToast(m){toast.textContent=m;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),1800)}