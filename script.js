// Function to find an eco-friendly route
function findEcoRoute() {
    let start = document.getElementById("start-location").value.trim().toLowerCase();
    let destination = document.getElementById("destination").value.trim().toLowerCase();
    let routeOptionsDiv = document.getElementById("route-options");

    if (start === "" || destination === "") {
        routeOptionsDiv.innerHTML = "<p style='color: red;'>❌ Please enter both locations.</p>";
        return;
    }

    // Simulated travel logic (basic approach)
    let isInternational = (start !== destination) && (isFarDistance(start, destination));

    if (isInternational) {
        routeOptionsDiv.innerHTML = `
            <p>🌍 Best Eco-Friendly Route from <strong>${capitalize(start)}</strong> to <strong>${capitalize(destination)}</strong>:</p>
            <ul>
                <li>✈️ Use eco-friendly airlines with carbon offset programs.</li>
                <li>🚢 Consider a cruise ship with low emissions (for nearby continents).</li>
                <li>🚆 Use trains if traveling within the same continent.</li>
                <li>🌱 Reduce carbon footprint by choosing non-stop flights.</li>
            </ul>
        `;
    } else {
        routeOptionsDiv.innerHTML = `
            <p>🌍 Best Eco-Friendly Route from <strong>${capitalize(start)}</strong> to <strong>${capitalize(destination)}</strong>:</p>
            <ul>
                <li>🚆 Take a train for a lower carbon footprint.</li>
                <li>🚲 Rent a bicycle for short-distance travel.</li>
                <li>🚌 Use electric or hybrid public transport.</li>
                <li>🚖 Consider shared electric taxis.</li>
            </ul>
        `;
    }
}

// Function to check if two locations are far apart (basic simulation)
function isFarDistance(start, destination) {
    const longDistanceRoutes = [
        ["america", "india"],
        ["usa", "europe"],
        ["canada", "australia"],
        ["china", "brazil"],
        ["africa", "japan"]
    ];

    return longDistanceRoutes.some(route =>
        (route.includes(start) && route.includes(destination))
    );
}

// Capitalize first letter of words
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to calculate carbon footprint
// Function to calculate carbon footprint accurately
function calculateCarbon() {
    let distance = parseFloat(document.getElementById("distance").value);
    let result = document.getElementById("carbon-result");

    if (isNaN(distance) || distance <= 0) {
        result.innerHTML = "❌ Please enter a valid distance.";
        return;
    }

    // Updated carbon emission factors (kg CO₂ per km per passenger)
    let trainElectricEmission = (distance * 0.03).toFixed(2);
    let trainDieselEmission = (distance * 0.06).toFixed(2);
    let carPetrolEmission = (distance * 0.18).toFixed(2);
    let carElectricEmission = (distance * 0.05).toFixed(2);
    let busEmission = (distance * 0.08).toFixed(2);
    let flightShortEmission = (distance * 0.25).toFixed(2);
    let flightLongEmission = (distance * 0.18).toFixed(2);

    result.innerHTML = `
        <p>📊 Estimated Carbon Emissions for ${distance} km:</p>
        <ul>
            <li>🚆 Electric Train: <strong>${trainElectricEmission} kg CO₂</strong></li>
            <li>🚆 Diesel Train: <strong>${trainDieselEmission} kg CO₂</strong></li>
            <li>🚗 Petrol Car: <strong>${carPetrolEmission} kg CO₂</strong></li>
            <li>🚘 Electric Car: <strong>${carElectricEmission} kg CO₂</strong></li>
            <li>🚌 Bus (Diesel): <strong>${busEmission} kg CO₂</strong></li>
            <li>✈️ Flight (Short-Haul): <strong>${flightShortEmission} kg CO₂</strong></li>
            <li>✈️ Flight (Long-Haul): <strong>${flightLongEmission} kg CO₂</strong></li>
        </ul>
        <p>💡 <em>Choose electric trains or buses for a lower carbon footprint!</em></p>
    `;
}

