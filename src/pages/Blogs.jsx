import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import netflix from '.././assets/Netflix.png'
import amazon from '.././assets/Prime.jpg'
const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='w-11/12 mx-auto min-h-[80vh] flex flex-col gap-10 '>
                <div>
                    <h1 className='text-center text-3xl font-bold my-5'>Blogs</h1>
                </div>
                <div className='flex flex-col lg:flex-row w-full gap-5'>
                    <div className='w-full  md:w-full lg:w-1/4'> 
                        <img className='w-[600px] lg:w-[300px]' src={netflix} alt="" />
                    </div>
                    <div className='w-full'>
                    <div className='w-full h-[100px] overflow-scroll'>
                        <h1 className='text-xl font-bold'>Cloud Efficiency at Netflix</h1>
                        <p>At Netflix, we use Amazon Web Services (AWS) for our cloud infrastructure needs, such as compute, storage, and networking to build and run the streaming platform that we love. Our ecosystem enables engineering teams to run applications and services at scale, utilizing a mix of open-source and proprietary solutions. In turn, our self-serve platforms allow teams to create and deploy, sometimes custom, workloads more efficiently. This diverse technological landscape generates extensive and rich data from various infrastructure entities, from which, data engineers and analysts collaborate to provide actionable insights to the engineering organization in a continuous feedback loop that ultimately enhances the business.
                        One crucial way in which we do this is through the democratization of highly curated data sources that sunshine usage and cost patterns across Netflix’s services and teams. The Data & Insights organization partners closely with our engineering teams to share key efficiency metrics, empowering internal stakeholders to make informed business decisions.
                        </p>
                    </div>
                    
                    </div>
                    
                </div>
                <div className='flex flex-col lg:flex-row w-full gap-5'>
                    <div className='w-full md:w-full lg:w-1/4'>
                        <img className='w-[600px] lg:w-[300px]' src={amazon} alt="" />
                    </div>
                    <div className='w-full'>
                    <div className='w-full h-[100px] overflow-scroll'>
                        <h1 className='text-xl font-bold'>Celebrate the Upcoming Premiere of Amazon Original Series</h1>
                        <p>To celebrate the upcoming premiere of the new video game anthology series Secret Level, streaming exclusively on Prime Video from December 10, Prime members can claim a variety of games from some of the franchises that feature in the show, and Prime members in the United States can also take advantage of several retail deals associated with games featured in Secret Level..
                        </p>
                    </div>
                    
                    </div>
                    
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;