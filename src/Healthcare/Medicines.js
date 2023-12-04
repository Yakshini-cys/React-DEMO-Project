import React from 'react'
import './Medicines.css'
import Nav from './Navbar'
const Medicines = () => {
  const han=()=>{
     alert("Item added to cart Sucessfully");
  }
  return (
    <>
    <Nav/>
    <center>
    <marquee width="50%" direction="left" height="50px">
    Get 50% off on Medicines,30% off on Skincare products And so on.....
    </marquee>
    </center>
    <div style={{marginLeft:'15%'}}>
    <a href='https://www.apollopharmacy.in/deal/42150'><img id='im' src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/b/a/baby_festival_banner_web.jpg?tr=w-400,q-60,f-webp,dpr-1.25,c-at_max" alt="baby"></img></a>
    <a href='https://www.simpleskincare.in'><img id='im' src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/s/i/simple_skincare.jpg?tr=w-400,q-60,f-webp,dpr-1.25,c-at_max" alt="pic"></img></a>
    <a href='https://www.hansaplastindia.com'><img id='im' src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/h/a/hansaplast_crepe_bandage_web_1.jpg?tr=w-400,q-60,f-webp,dpr-1.25,c-at_max" alt="pic"></img></a>
    <h2>Shop by Category</h2>
    </div>
    <div style={{marginLeft:'10%'}}>
    <img class="hlo"  id='im' src="https://images.apollo247.in/pub/media/catalog/category/babycare.jpg?tr=w-367.5,q-80,f-webp,dpr-1.25,c-at_max" alt="no"></img>
    <img class="hlo" id='im' src="https://images.apollo247.in/pub/media/catalog/category/protein_supplements.jpg?tr=w-367.5,q-60,f-webp,dpr-1.25,c-at_max" alt="no"></img>
    <img class="hlo" id='im' src="https://images.apollo247.in/pub/media/catalog/category/sexual_health_new.jpg?tr=w-367.5,q-80,f-webp,dpr-1.25,c-at_max" alt="no"></img>
    </div>
    <p>
    <ul style={{marginLeft:'4%'}}>
    <li  id='il'>Baby Care</li>
    <li  id='il'>Protein Drinks</li>
    <li  id='il'>Sexual Wellness</li>
    </ul>
    </p>
    <div style={{marginLeft:'10%'}}>
    <img class="hlo" id='im' src="https://images.apollo247.in/pub/media/catalog/category/ayurvedic_range.jpg?tr=w-367.5,q-80,f-webp,dpr-1.25,c-at_max" alt="no"></img>
    <img class="hlo" id='im' src="https://images.apollo247.in/pub/media/catalog/category/healthdevices.jpg?tr=w-367.5,q-80,f-webp,dpr-1.25,c-at_max" alt="no"></img>
    <img class="hlo" id='im'  src="https://images.apollo247.in/pub/media/catalog/category/personalcare.jpg?tr=w-367.5,q-80,f-webp,dpr-1.25,c-at_max" alt="no"></img>
    </div>
    <p>
    <ul style={{marginLeft:'4%'}}>
    <li id='il'>Ayurveda</li>
    <li  id='il'>Health Devices</li>
    <li  id='il'>Personal Care</li>
    </ul>
    </p>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center>
    <br></br>
    <img class="hl" id='im'src="https://images.apollo247.in/pub/media/catalog/product/C/E/CER0078_1-JULY23_1.jpg" alt=""></img>
    <br></br>
    <p>Nestle Cerelac Baby Cereal with Milk Wheat Multigrain & Fruits</p>
    <br></br>
    <p>MRP:₹322</p>
    <br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>

    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAM0085_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Pampers Active Baby Taped Diapers Medium, 62 Count Bestseller</p><br></br>
    <p>MRP:₹1057</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl"  id='im' src="https://images.apollo247.in/pub/media/catalog/product/W/O/WOO0001_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Woodwards Gripe Water (For Babies), 200 ml</p><br></br>
    <p>MRP:₹99</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div  style={{display:'flex',marginLeft:'170px'}} >
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/D/E/DER0324_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Dermadew Baby Soap, 75 gm</p><br></br>
    <p>MRP:₹198</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class='baby'>
    <center><br></br>
    <img class="hl" id='im'src="https://images.apollo247.in/pub/media/catalog/product/H/I/HIM0134_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Himalaya Baby Powder, 200 gm</p><br></br>
    <p>MRP:₹105</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class='baby'>
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/J/O/JOH0081_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Johnson's Baby Skincare Wipes, 72 Count</p><br></br>
    <p>MRP:₹280</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div  style={{display:'flex',marginLeft:'170px'}} >
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/N/U/NUT0442_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Nutrix Ultra Whey Protein Powder, 500 gm</p><br></br>
    <p>MRP:₹1675</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/N/A/NAT0457_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Isopure Low Carb Dutch Chocolate Flavoured Powder, 7.5 lb</p><br></br>
    <p>MRP:₹16,094</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/D/Y/DYM0007_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Dymatize Elite 100% Whey Protein Rich Chocolate Flavour Powder, 5 lb</p><br></br>
    <p>MRP:₹9749</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div  style={{display:'flex',marginLeft:'170px'}} >
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/Q/N/QNT0046_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>QNT Massive Mass Irish Chocolate Flavour Powder, 4 kg</p><br></br>
    <p>MRP:₹3249</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class='baby'>
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/G/N/GNC0022_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>GNC AMP Gold Protein Advanced Double Rich Chocolate Flavour Powder</p><br></br>
    <p>MRP:₹4499</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class='baby'>
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/P/U/PUR0356_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Pure Foods 100% Pea Protein Chocolate Flavour Powder, 360 gm</p><br></br>
    <p>MRP:₹950</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div  style={{display:'flex',marginLeft:'170px'}} >
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/H/I/HIM0062_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Himalaya Himcolin Gel, 30 gm</p><br></br>
    <p>MRP:₹230</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class='baby'>
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/D/U/DUR0039_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Durex Intense Vibe Ring, 1 Count</p><br></br>
    <p>MRP:₹799</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class='baby'>
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/p/r/pre0478_1_1-june23.jpg" alt=""></img><br></br>
    <p>Prega News Pregnancy Test Kit, 1 Count</p><br></br>
    <p>MRP:₹60</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div  style={{display:'flex',marginLeft:'170px'}} >
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/a/p/apm0025-01_2.jpg" alt=""></img><br></br>
    <p>Life Time Multi Vitamin for Men, 30 Tablets</p><br></br>
    <p>MRP:₹225</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/V/W/VWA0004_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>VWash Plus Expert Intimate Hygiene Wash, 100 ml</p><br></br>
    <p>MRP:₹180</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/W/H/WHI0083_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Whisper Maxi Fit Sanitary Regular Pads, 15 Count</p><br></br>
    <p>MRP:₹165</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/H/A/HAJ0005_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Dabur Hajmola Imli,(Better Health) 120 Tablets</p><br></br>
    <p>MRP:₹70</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/Z/A/ZAN0228_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Zandu Nityam Ayurvedic Laxative, 30 Tablets</p><br></br>
    <p>MRP:₹110</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/D/I/DIV0287_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Patanjali Divya Madhunashini Vati Extra Power, 120 Tablets</p><br></br>
    <p>MRP:₹225</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/s/o/softov_1_1.jpg" alt=""></img><br></br>
    <p>Softovac Bowel Protein Regulator Powder, 250 gm</p><br></br>
    <p>MRP:₹435</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/S/A/SAF0008_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Hamdard Safi Natural Blood Purifier Syrup, 500 ml</p><br></br>
    <p>MRP:₹230</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/S/H/SHI0005_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Dabur Shilajit for Vigour & Health, 30 Capsules</p><br></br>
    <p>MRP:₹190</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/A/P/APL0060_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Apollo Life N95 Unisex Face Mask, 5 Count</p><br></br>
    <p>MRP:₹225</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/A/C/ACC0008_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Accu-Chek Active Test Strips & Testers, 50 Count</p><br></br>
    <p>MRP:₹1086</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/G/L/GLU0540_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Dr. Morepen Gluco One BG-03 Blood Glucose Test Strips, 25 Count</p><br></br>
    <p>MRP:₹449</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/F/R/FRE0348_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>FreeStyle Libre Sensor - Flash Glucose Monitoring System, 1 Count</p><br></br>
    <p>MRP:₹4829</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/B/P/BPM0062_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Omron Automatic Blood Pressure Monitor HEM-8712, 1 Count</p><br></br>
    <p>MRP:₹2376</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/T/Y/TYN0038_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Tynor Ankle Brace Single Large(Flexible), 1 Count</p><br></br>
    <p>MRP:₹654</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/L/O/LOR0709_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>L'Oreal Paris Revitalift Hyaluronic Acid Day Cream, 50 ml</p><br></br>
    <p>MRP:₹599</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/N/I/NIV0385_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Nivea Milk Delights Cleanses & Brightens Safrron Face Wash, 100 ml</p><br></br>
    <p>MRP:₹199</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/S/H/SHO0093_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Shower To Shower Super Cool Prickly Heat Powder, 150 gm</p><br></br>
    <p>MRP:₹149</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <div style={{display:'flex',marginLeft:'170px'}}>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/A/P/APL0064_1-JULY23_1.jpg" alt=""></img><br></br>
    <p>Apollo Life Hand Sanitizer, 5 Litre</p><br></br>
    <p>MRP:₹900</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im'src="https://images.apollo247.in/pub/media/catalog/product/N/E/NEU0217_1-AUG23_1.jpg" alt=""></img><br></br>
    <p>Neutrogena Ultra Sheer Dry-Touch Sunblock SPF 50+, 88 ml</p><br></br>
    <p>MRP:₹780</p><br></br>
    <div><button class="Add" onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    <div class="baby">
    <center><br></br>
    <img class="hl" id='im' src="https://images.apollo247.in/pub/media/catalog/product/n/i/niv0424_1-sep2023_1_.png" alt=""></img><br></br>
    <p>Nivea Body Milk Nourishing Lotion, 600 ml</p><br></br>
    <p>MRP:₹315</p><br></br>
    <div><button class="Add"onClick={han}>ADD TO CART</button></div>
    </center>
    </div>
    </div>
    <br></br>
    </>
  )
}

export default Medicines