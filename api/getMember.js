import http from 'k6/http';

export function getMember() {
    const url = 'https://ksp2568-2.thaijobjob.com/api/v2/reg2/member';

    const payload = JSON.stringify({
        CustomerID: '1341101396046',
    });

    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.oASG2YhYW3rNrCPzCSA8Rm1qaGCnjtkZvYuNWO_SoUM',
    };

    const res = http.post(url, payload, { headers });

    //console.log('Response body:\n' + res.body);

    return res;
}
