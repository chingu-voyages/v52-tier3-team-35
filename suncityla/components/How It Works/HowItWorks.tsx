import Card from "./Card";

export default function HowItWorks(){
    return(
        <>
        <h2 className="text-3xl font-semibold mb-6 text-center heading uppercase">How It Works?</h2>
        <div className="flex justify-center items-end gap-10 mb-14">
            <Card step="Step 1" howTo="Schedule a free evaluation online through our website" imageSrc="/step1.jpg"/>
            <Card step="Step 2" howTo="A specialist will assess the costs and benefits for the resident’s home." imageSrc="/step2.jpg"/>
            <Card step="Step 3" howTo="The resident receives an installation and maintenance plan." imageSrc="/step3.jpg"/>
        </div>
        </>
    )
}