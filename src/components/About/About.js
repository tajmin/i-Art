import React from 'react';

const About = () => {
    return (
        <div className="font-serif container mx-auto">
            <h1 className="text-5xl font-medium pt-28">This is about <span className="text-red-600 pr-1 italic font-bold">i-Art.</span></h1>
            <div className="py-8 px-24 text-justify text-lg text-gray-600">
                <p className="py-8 px-8">Since 2007, artists and designers have been calling i-Art their home. Founded in San Francisco and privately owned, it is one of the largest  accredited art and design schools in the nation. We are first and foremost a professional school—a specialized place that helps you master your craft as you prepare for professional roles as artists and designers. Our hands-on, no-nonsense curriculum is taught by some of the finest minds working in today’s creative and innovative industries. They will help you develop your talent and acquire skills sought by the creative marketplace.</p>

                <img className="mx-auto py-6" src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />

                <p className="py-8 px-8">All are welcome here. Our inclusive admissions policy is rare among art schools. We’ve found that our students’ potential doesn’t depend on their past elsewhere, but on their future with us. Find your place and your purpose at Academy of Art University, as you prepare for your professional career.</p>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 py-24 px-24 text-justify text-lg text-gray-600 flex">
                <div className="col-span-2">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="py-12 lg:pl-20 lg:pr-8">
                    <p>i-Art is an absolutely amazing place to be a college student. One of the world’s great creative capitals, San Francisco has been our home since 1929. Our neighbors include giants in everything from advertising, animation, and architecture to communications, game development, and web design.</p>

                    <p className="py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

            </div>
        </div>
    );
};

export default About; <h1>This is All About i-Art</h1>