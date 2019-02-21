fetch("http://localhost:8008/index.php?editor/fileSave", {
    "credentials": "include",
    "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-csrf-token": "HFzwHbwPbdSBgScvFCFr",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "path=%2Fvar%2Fwww%2Fhtml%2Fdata%2FUser%2Fadmin%2Fhome%2F%E6%88%91%E7%9A%84%E6%96%87%E6%A1%A3%2Ffoobar.txt&charset=utf-8&filestr=MTExMTExMTExMTExMTEx&base64=1",
    "method": "POST",
    "mode": "cors"
});
