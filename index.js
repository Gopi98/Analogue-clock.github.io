setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = (30 * htime) + (mtime / 2);
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    crotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    semicir.style.transform = `rotate(${crotation}deg)`;
}, 1000);