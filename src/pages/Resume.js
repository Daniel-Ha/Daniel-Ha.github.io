import "../custom-styling/Underline.css";

export default function Resume() {
    return (

            <div className="w-full flex justify-center pb-16">
                <div className="w-full" style={{ height: 'calc(75vw * 2)' }}> {/* Adjust height based on width and A4 aspect ratio */}
                    <iframe title="Daniel Ha's Resume" src={`${process.env.PUBLIC_URL}/Daniel_Ha_Resume.pdf`} className="w-full h-full"></iframe>
                </div>
            </div>
    );
}