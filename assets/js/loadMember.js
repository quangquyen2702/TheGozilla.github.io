const memberData = {
    "Member": [{
            memberphoto: "assets/img/AboutUs/HuyHoang.png",
            name: "Nguyễn Huy Hoàng",
            position: "Team Leader/BA",
        },

        {
            memberphoto: "assets/img/AboutUs/TruongTam.png",
            name: "Nguyễn Trường Tâm",
            position: "Front-end Developer",
        },

        {
            memberphoto: "assets/img/AboutUs/BaoTran.jpg",
            name: "Trịnh Ngọc Bảo Trân",
            position: "Front-end Developer",
        },

        {
            memberphoto: "assets/img/AboutUs/KhanhHan.png",
            name: "Lê Khánh Hân",
            position: "UX/UI Designer",
        },

        {
            memberphoto: "assets/img/AboutUs/MauTung.png",
            name: "Nguyễn Mậu Tùng",
            position: "Team Leader/BA",
        },

        {
            memberphoto: "assets/img/AboutUs/GraceBui.png",
            name: "Bùi Thị Thu Trang",
            position: "Content Writer",
        }
    ],
}

document.getElementById("part").innerHTML = memberData.map(function(member) {}).join('')