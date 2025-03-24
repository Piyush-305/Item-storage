// List of 1000 random objects
const items = [
    "Chair", "Laptop", "Painting", "Bookshelf", "Fan", "Suitcase", "Bicycle",
    "Guitar", "Mirror", "Camera", "Microwave", "Helmet", "Typewriter",
    "Telescope", "Toolbox", "Vase", "Backpack", "Keyboard", "Monitor", "Printer",
    "Desk", "Dumbbells", "Projector", "Iron Box", "Rug", "Vacuum Cleaner",
    "Sewing Machine", "Bean Bag", "Aquarium", "Chandelier", "Electric Kettle",
    "Gaming Console", "Handbag", "Lantern", "Mattress", "Radio", "Skateboard",
    "Snow Globe", "Speakers", "Treadmill", "Tripod", "Wall Clock", "Yoga Mat","Dining chair","Bean bag","Recliner chair","Study desk","Shoe cabinet","Ottoman","Dressing table","Laundry basket","Blanket","Pillow","Mattress","Curtain rod","Towel rack","Bathtub","Shower curtain","toilet seat","oap dispenser","issue box","broom","Mop","Floor mat","Paper tray","Desk organizer","Pen holder","Notice board","Scanner","Landline telephone","aper cutter","Paperweight","Envelope sealer","Filing tray","Office partition","Projection screen","Conference speaker","ID card holder","Laminating machine","Punching machine","Blueprint holder","Printer paper stack","post it board","Garden table","Watering can","Garden fence","Bird bath","Porch swing","Doghouse","Wooden deck","Wind chimes","Outdoor shower","Camping tent","Log bench","Rain barrel","Driveway gate","Porch light","Garden trellis","Artificial turf","Plant pot","Fire pit","Outdoor storage box","Electric scooter","Tractor","Cement mixer truck","Snowmobile","Hot air balloon","Cargo ship","Fire hydrant","Tow truck","Dump truck","Bullet train","Gondola","Paraglider","Space shuttle","Fuel tanker","Cruise ship","Ferry boat","Hang glider","Monster truck","Autonomous drone","Plasma TV","Smart thermostat","Home theater system","Wireless charger","Smart door lock","Digital photo frame","Satellite dish","LED strip lights","Electronic scoreboard","D printer","Circuit board","Metal detector","Radar gun","Thermal camera","Weather station","Barcode scanner","GPS navigator","Fitness tracker","Bluetooth keyboard","Smart refrigerator","Gym bench","Volleyball net","Badminton racket","Baseball glove","Tennis net","Soccer ball machine","Yoga mat","Gymnastics beam","Water skis","Racing simulator","Ski poles","Horse saddle","Rowing machine","Jump rope","Mini trampoline","Airsoft gun","Archery target","Boxing ring","Mini golf set","Paintball marker","Harp","Banjo","Bagpipes","Marimba","Double bass","Harmonica","Ukulele","Mandolin","Electric violin","Timpani drum","Synthesizer pedal","Concert xylophone","Grand piano bench","Bass drum","Music mixing console","Karaoke machine","Digital metronome","Electric sitar","Orchestral harp","Turntable","Bricklayer trowel","Cement bags","Rebar","Scaffolding","Backhoe loader","Forklift","Concrete slabs","Laser level","Measuring wheel","Welding torch","Hydraulic press","Concrete breaker","Workbench"


];

// Generate 1000 unique items
while (items.length < 1000) {
    items.push("Item-" + (items.length + 1));
}

// Populate the datalist with items
const datalist = document.getElementById("itemsList");
items.forEach(item => {
    let option = document.createElement("option");
    option.value = item;
    datalist.appendChild(option);
});

// Form submission handling
document.getElementById("storageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const itemType = document.getElementById("itemType").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const duration = parseInt(document.getElementById("duration").value);

    if (!items.includes(itemType)) {
        alert("Please select a valid item.");
        return;
    }

    // Random pricing for different objects
    const basePrice = Math.floor(Math.random() * 500) + 50;
    const totalPrice = basePrice * quantity * duration;

    document.getElementById("price").textContent = totalPrice;

    // Store data in backend
    fetch("http://localhost:3000/store-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemType, quantity, duration, totalPrice })
    });

    // Add item to the table
    const table = document.getElementById("itemsTable");
    let row = table.insertRow();
    row.innerHTML = `<td>${itemType}</td><td>${duration}</td><td>₹${totalPrice}</td>`;
});