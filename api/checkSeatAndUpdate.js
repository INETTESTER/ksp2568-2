import http from 'k6/http';

export function checkSeatAndUpdate() {
    const url = 'https://ksp2568-2.thaijobjob.com/api/v2/seat/checkSeat';

    const payload = JSON.stringify({
        RoundID: 1,
        Round: "รอบที่ 1 วันที่ 15 พฤศจิกายน 2568 เวลา 09:00 - 12:00 น.",
        LocationID: 1,
        Location: "หมาวิทยาลัยแม่โจ้",
        CustomerID: "1469900472909"
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.oASG2YhYW3rNrCPzCSA8Rm1qaGCnjtkZvYuNWO_SoUM'
    };

    const res = http.post(url, payload, { headers });

    //console.log('Response body:\n' + res.body);


    return res;
}
