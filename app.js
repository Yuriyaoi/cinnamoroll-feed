(function () {
    let score = 0; // ตัวแปรเก็บคะแนน เริ่มที่ 0

    // ส่วน Logic (Process)
    window.feedCinnamoroll = function () {
        score = score + 1; // บวกเพิ่มทีละหนึ่ง
        document.getElementById("score").innerText = score; // โชว์คะแนนใหม่

        let img = document.getElementById("cinnamoroll-img");
        let status = document.getElementById("status-text");

        // 🧠 นี่คือ Logic Range (0-50, 51-80, 81+)
        if (score <= 30) {
            // State: ผอมโซ
            img.src = "cinnamoroll_thin.png";
            img.style.width = "250px";
            status.innerText = "กำลังหิวโหย...";
        } else if (score <= 80) {
            // State: เริ่มมีกิน
            img.src = "cinnamoroll_normal.png";
            img.style.width = "300px"; // ขยายขนาดนิดหน่อย
            status.innerText = "เริ่มมีแก้มแล้ว!";
        } else {
            // State: SUPER FAT (เวอร์ชันพุงป่องอิ่มจนเดินไม่ไหว!)
            img.src = "cinnamoroll_super_fat.png";
            img.style.width = "400px"; // ขยายร่างใหญ่สุดๆ
            status.innerText = "อิ่มจนพุงกาง เดินไม่ไหวแล้ว!! (Super Fat)";
        }
    };
    // ดักจับการพยายามแฮ็กตัวแปร score
    Object.defineProperty(window, 'score', {
        set: function (value) {
            triggerNightmare();
        }
    });

    function triggerNightmare() {
        // ถ้ามีใครพยายามเปลี่ยนคะแนนจาก Console...
        alert("แกพยายามแฮ็กน้องชินนาม่อนเหรอ?!");
        document.body.classList.add('nightmare-mode');
        document.getElementById('cinnamoroll-img').src = 'nightmare.png';
        document.getElementById('status-text').innerText = "แกทำอะไรลงไป...";
    }
})();

