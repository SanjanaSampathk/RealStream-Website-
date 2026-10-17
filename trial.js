// 1. Fake Schedule Data
const events = [
    { title: "Opening Ceremony", time: "10:00 AM", status: "Ended", icon: "🎉" },
    { title: "Guest Lecture: AI Future", time: "11:30 AM", status: "Live", icon: "🎙️" },
    { title: "Talent Hunt Finals", time: "02:00 PM", status: "Upcoming", icon: "🎸" },
    { title: "BGMI Grand Finale", time: "04:30 PM", status: "Upcoming", icon: "🎮" },
    { title: "Award Ceremony", time: "08:00 PM", status: "Upcoming", icon: "🏆" },
];

// 2. Load Schedule Cards
const grid = document.getElementById('schedule-grid');
events.forEach(ev => {
    const statusColor = ev.status === 'Live' ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600';
    const statusClass = ev.status === 'Live' ? 'animate-pulse-red' : '';
    
    grid.innerHTML += `
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer group">
            <div class="flex justify-between items-start mb-4">
                <span class="text-3xl">${ev.icon}</span>
                <span class="${statusColor} ${statusClass} px-2 py-1 rounded text-xs font-bold uppercase">${ev.status}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">${ev.title}</h3>
            <p class="text-slate-500 mt-1 font-medium">${ev.time}</p>
        </div>
    `;
});

// 3. Countdown Timer Logic
function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Set target to 2 days from now

    const now = new Date().getTime();
    const distance = targetDate - now;

    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();