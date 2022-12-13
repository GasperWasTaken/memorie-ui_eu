
import "./post.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="assets"></img>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter"></div>
                <div className="postBottom"></div>
            </div>
        </div>
    )
}
