let participants = [];

function sortParticipants() {
    participants.sort((a, b) => {
        if (b.bestScore === a.bestScore) {
            return a.bestTime - b.bestTime;  
        } else {
            return b.bestScore - a.bestScore;
        }
    });
}

function renderRankingBoard() {
    const tbody = document.getElementById("RankingBoard");
    tbody.innerHTML = ""; 

    participants.forEach(participant => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${participant.robotName}</td>
            <td>${participant.clubName}</td>
            <td>${participant.bestScore}</td>
            <td>${participant.bestTime}s</td>
        `;

        tbody.appendChild(row);
    });
}

function addOrUpdateParticipant(robotName, clubName, score, time) {
    let participant = participants.find(p => p.robotName === robotName);

    if (!participant) {
        participant = {
            robotName,
            clubName,
            bestScore: score,
            bestTime: time,
            trialCount: 1
        };
        participants.push(participant);
    } else {
        participant.trialCount++;

        if (score > participant.bestScore || (score === participant.bestScore && time < participant.bestTime)) {
            participant.bestScore = score;
            participant.bestTime = time;
        }
    }

    sortParticipants();
    renderRankingBoard();
}

setTimeout(() => addOrUpdateParticipant("Robo1", "Club A", 85, 120), 1000);
setTimeout(() => addOrUpdateParticipant("Robo2", "Club B", 92, 110), 2000);
setTimeout(() => addOrUpdateParticipant("Robo3", "Club C", 85, 115), 3000);
setTimeout(() => addOrUpdateParticipant("Robo4", "Club D", 95, 100), 4000);
setTimeout(() => addOrUpdateParticipant("Robo5", "Club E", 85, 110), 5000);

setTimeout(() => addOrUpdateParticipant("Robo1", "Club A", 90, 115), 6000);
setTimeout(() => addOrUpdateParticipant("Robo2", "Club B", 92, 108), 7000);
setTimeout(() => addOrUpdateParticipant("Robo3", "Club C", 85, 110), 8000);
setTimeout(() => addOrUpdateParticipant("Robo4", "Club D", 95, 98), 9000);
setTimeout(() => addOrUpdateParticipant("Robo5", "Club E", 87, 105), 10000);
