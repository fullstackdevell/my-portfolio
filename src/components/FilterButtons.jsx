import React, { useState }from 'react';

const categories = ['Coding', 'Marketing'];

const FilterButtons = () => {
    const [activeTab, setActiveTab] = useState('Coding');

    const baseClasses = "font-roboto-mono text-sm font-medium py-2 px-3 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none";

    const activeColor = "bg-[#5856D6] text-white hover:bg-[#4a47bc]";

    const inactiveColor = "bg-[#272727] text-white hover:bg-[#5856D6]";

    return (
        <div className="flex space-x-4 mb-8 justify-center">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`${baseClasses} ${
                        activeTab === category ? activeColor : inactiveColor
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;