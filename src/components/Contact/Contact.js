import React from 'react';
import img from '../../images/contact.jpg'

const Contact = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="md:px-20 lg:px-32 md:py-16 my-auto font-serif text-justify">
                <h1 className="md:text-4xl capitalize pb-16">stay in touch.</h1>
                <div class="grid grid-cols-1 gap-6 lg:w-2/3">
                    <label class="block">
                        <span class="text-gray-700">Full name</span>
                        <input type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Email address</span>
                        <input type="email" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                    </label>
                    <button className="bg-red-600 py-2 text-xl text-white w-auto rounded-sm">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;