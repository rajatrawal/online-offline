import useOnline from './useOnline';
import './css/App.css'
const NetworkStatus = (props) => {
    const { headingText, descriptionText, buttonText, buttonLink, headingCss, descriptionCss, buttonCss, modalCss, modalCssName } = props;
    const isOnline = useOnline();
    return (
        <div style={{ display: isOnline ? 'none' : 'block' }}>

            <div className="darkBackgroundDiv">

                <div className={modalCssName ? modalCssName : "modalDiv"} style={modalCss}>
                    <div className="heading" style={headingCss}>
                        {
                            headingText ? headingText : "Oops, Looks Like You're Offline!🌐"
                        }
                    </div>
                    <p className='description' style={descriptionCss}>
                        {
                            descriptionText ? descriptionText : " Well, well, well... someone pulled the plug, didn't they? 🙃 No worries, even our pixels need a coffee break sometimes! ☕"
                        }
                    </p>
                    <a href={buttonLink ? buttonLink : "/"} className="modalBtn">
                        <button className="reloadButton mt-3" style={buttonCss}>{buttonText ? buttonText : "Refresh"}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NetworkStatus;