// 1. Fake Schedule Data
const events = [
    { title: "Opening Ceremony", time: "10:00 AM", status: "Ended", icon: "" },
    { title: "Guest Lecture: AI Future", time: "11:30 AM", status: "Live", icon: "🎙️" },
    { title: "Talent Hunt Finals", time: "02:00 PM", status: "Upcoming", icon: "🎸" },
    { title: "BGMI Grand Finale", time: "04:30 PM", status: "Upcoming", icon: "🎮" },
    { title: "Award Ceremony", time: "08:00 PM", status: "Upcoming", icon: "🏆" },
];

// Load Schedule Cards
const grid = document.getElementById('schedule-grid');
events.forEach(ev => {
    const statusColor = ev.status === 'Live' ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600';
    grid.innerHTML += `
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer">
            <div class="flex justify-between items-start mb-4">
                <span class="text-3xl">${ev.icon}</span>
                <span class="${statusColor} px-2 py-1 rounded text-xs font-bold uppercase">${ev.status}</span>
            </div>
            <h3 class="text-xl font-bold text-white">${ev.title}</h3>
            <p class="text-slate-400 mt-1 font-medium">${ev.time}</p>
        </div>
    `;
});

// 2. Countdown Timer Logic
function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 
    const now = new Date().getTime();
    const distance = targetDate - now;

    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 3. LIVE CHAT LOGIC
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const chatBtn = document.getElementById('chat-btn');

function addChatMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = isUser ? 'bg-emerald-500 text-slate-950 p-2 rounded-lg self-end max-w-[80%] ml-auto font-medium' : 'bg-slate-800 text-slate-200 p-2 rounded-lg max-w-[80%]';
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

const fakeMessages = ["This is amazing! 🔥", "Who is performing next?", "Let's gooo!", "Great sound quality", "Hello from Mumbai!"];
setInterval(() => {
    addChatMessage(fakeMessages[Math.floor(Math.random() * fakeMessages.length)]);
}, 3000);

chatBtn.addEventListener('click', () => {
    if(chatInput.value.trim() !== "") {
        addChatMessage(chatInput.value, true);
        chatInput.value = "";
    }
});

// 4. Q&A LOGIC
const qaList = document.getElementById('qa-list');
const qaInput = document.getElementById('qa-input');
const qaBtn = document.getElementById('qa-btn');

qaBtn.addEventListener('click', () => {
    if(qaInput.value.trim() !== "") {
        qaList.innerHTML += `
            <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                <div>
                    <p class="font-bold text-white">${qaInput.value}</p>
                    <p class="text-xs text-slate-500">Just now</p>
                </div>
                <button class="text-emerald-400 font-bold text-sm hover:underline">▲ Upvote</button>
            </div>
        `;
        qaInput.value = "";
    }
});

// 5. CERTIFICATE LOGIC
const certBtn = document.getElementById('cert-btn');
const certNameInput = document.getElementById('cert-name');
const certDisplay = document.getElementById('certificate-display');
const certDisplayName = document.getElementById('cert-display-name');

certBtn.addEventListener('click', () => {
    if(certNameInput.value.trim() !== "") {
        certDisplayName.innerText = certNameInput.value;
        certDisplay.classList.remove('hidden');
        certDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});