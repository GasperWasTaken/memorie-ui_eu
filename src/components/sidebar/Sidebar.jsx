import "./sidebar.css"
import { RssFeed, Image, PersonalVideo } from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Image className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Images
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PersonalVideo className="sidebarIcon" />
                        
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/profilepic1.jpg" alt=""></img>
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}