import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

const TagInput = ({ tags, setTags }) => {
    const inputRef = useRef(null);
    const removeTag = (removeIndex) => {
        setTags(tags.filter((_, index) => index !== removeIndex))
    }

    const addTag = (e) => {
        if (e.target.value !== "") {
            setTags([...tags, e.target.value])
            e.target.value = ""
        }
    }

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div
            onClick={handleClick}
            className='border bg-white border-gray-300 rounded mx-4 my-2 flex py-1 px-2'>
            <ul className='flex'>
                {tags?.map((tag, index) => (
                    <li
                        key={index}
                        className='bg-blue-800 mr-2 px-1 rounded text-white font-poppins font-normal overflow-auto'>
                        <span className='text-sm'>{tag}</span>
                        <FontAwesomeIcon
                            onClick={() => removeTag(index)}
                            className='text-xs ml-1' icon={faXmarkCircle} />
                    </li>
                ))}
            </ul>
            <input
                className='border-none ml-2 focus:outline-none '
                type="text"
                ref={inputRef}
                placeholder="Add Tags"
                onKeyUp={(e) => (e.key === "Enter" ? addTag(e) : null)}
            />
        </div>
    );
};

export default TagInput;