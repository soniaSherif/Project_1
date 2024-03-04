import React from "react";
import Trail from "./Trail"
const Board = () => {
    return(
        <div className="Board">
            <div className="Card">
            <Trail id = "1" name = "#1 - Minneopa State Park Loop" link = "https://www.google.com/maps/dir/Mankato,+MN+56001/44.15726,-94.08618/@44.134412,-94.107571,12z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x87f43902c262c529:0x7d316af773a33dde!2m2!1d-93.9674371!2d44.1223003!1m0?entry=ttuom/parks/us/minnesota/minneopa-state-park" location="Minneopa State Park" length = "Length: 4.8 mi•Est. 1h 30m" img = "./trail0.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "2" name = "#2 - Rasmussen Woods" link = "https://www.google.com/maps/dir/Mankato,+MN+56001/44.14545,-94.01212/@44.1338662,-94.0309776,13z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x87f43902c262c529:0x7d316af773a33dde!2m2!1d-93.9674371!2d44.1223003!1m0?entry=ttu" location="Rasmussen Park" length = "Length: 3.3 mi•Est. 1h 14m" img = "./trail4.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "3" name = "#3 - Red Jacket Trail" link = "https://www.google.com/maps/dir/Current+Location/44.15967,-94.01867" location="Minneopa State Park" length = "Length: 11.7 mi•Est. 3h 52m" img = "./trail5.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "4" name = "#4 - Minneopa Falls Trail" link = "https://www.google.com/maps/place/Minneopa+Falls/@44.1487887,-94.0928886,17z/data=!3m1!4b1!4m6!3m5!1s0x87f447bd787eba25:0x4f717d2d6690ad4!8m2!3d44.1487779!4d-94.0904875!16s%2Fg%2F11d_tz1xyp?entry=ttu" location="Minneopa State Park" length = "Length: 0.6 mi•Est. 15m " img = "./trail1.jpg" />
            </div>
            <div className="Card">
            <Trail id = "5" name = "#5 - Williams Nature Center South and North Overlooks" link = "https://www.google.com/maps/dir/Current+Location/44.15413,-94.07799" location="Williams Nature Center" length = "Length: 1.8 mi•Est. 33m " img = "./trail7.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "6" name = "#6 - Minneopa Hiking Club Trail" link = "https://www.google.com/maps/dir/Current+Location/44.15741,-94.08597" location="Minneopa State Park" length = "Length: 2.7 mi•Est. 49m  " img = "./trail3.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "7" name = "#7 - Minnesota River Trail" link = "https://www.google.com/maps/dir/Current+Location/44.16253,-94.03578" location="Mankato, Minnesota" length = "Length: 10.7 mi•Est. 3h 18m  " img = "./trail6.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "8" name = "#8 - Red Jacket Valley Trail" link = "https://www.google.com/maps/dir/Current+Location/44.12288,-94.0543" location="Red Jacket Valley Park" length = "Length: 1.7 mi•Est. 32m " img = "./trail8.jpg"/>
            </div>
            <div className="Card">
            <Trail id = "9" name = "#9 - Kiwanis Recreation Area Hiking Trail" link = "https://www.google.com/maps/dir/Shakopee,+Minnesota/44.19951,-94.01997/@44.4983845,-94.1067353,10z/data!3m1!4b1!4m8!4m7!1m5!1m1!1s0x87f60c58b5a4c5d9:0xb1a09cfd4b9ce49a!2m2!1d-93.5272861!2d44.7973962!1m0?entryttu" location="Mankato, Minnesota" length = "Length: 1.4 mi•Est. 25m" img = "./download (1).jpg"/>
            </div>            
            <div className="Card">
                <Trail id = "10" name = "#10 - Mount Kato Ski Area MTB Route" link = "https://www.google.com/maps/dir/Mankato,+MN+56001/44.13336,-94.03301/@44.1237804,-94.0723572,12z/data!3m1!4b1!4m8!4m7!1m5!1m1!1s0x87f43902c262c529:0x7d316af773a33dde!2m2!1d-93.9674371!2d44.1223003!1m0?entryttu" location="Mankato, Minnesota<" length = "Length: 4.5 mi  " img = "./trail10.jpg"/>
            </div>
        </div>
    )
}

export default Board;