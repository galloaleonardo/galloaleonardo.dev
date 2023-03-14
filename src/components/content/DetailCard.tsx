import VisualContent from './VisualContent'
import TextContent from './TextContent'


export default function DetailCard({ language }) {
    return (
        <>
            <div className='container mt-5 lg:mt-10 mx-auto max-w-6xl' data-testid="detail-card">
                <div className="grid lg:grid-flow-col gap-5 lg:gap-20 text-black dark:text-white">
                    <VisualContent />
                    <TextContent language={language}/>
                </div>
            </div>
        </>
    );
}