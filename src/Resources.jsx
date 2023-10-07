import bookmark from "./assets/SCIMATCH/icons-svg/bookmark.svg"
import ResourceIllustration from "./assets/SCIMATCH/icons-svg/RsourceIllustration.svg"
import filter from "./assets/SCIMATCH/icons-svg/filter.svg"

const Resources = () => {
    return (
        <div class="bg-backgroundColor">
            
            <div class="w-full flex items-center align-middle justify-center">
                <div>
                    <input type="text" class="search-box w-[40rem] text-[1.5rem] px-8 m-[2rem] rounded-full p-3" placeholder="Search For Resources" />
                </div>
                <div class="filter m-[2rem] text-[2rem]">Filters</div>
                <img src={filter} className="w-[2rem]" alt="" />
            </div>
            <div class="lower_contents flex p-12">
                <div class="bookmark_section w-3/12">

                    <div class="bookmark_name flex items-center">
                        <div class="bookmarks_image p-2"><img src={bookmark} className="w-[1.5rem] mr-[0.5rem]" alt="" /></div>
                        <div class="bookmark_title_name text-[2rem]">
                            Bookmarks
                        </div>
                    </div>
                    <br />
                    <div class="contribute_btn border-blue-600 text-blue-600 border-2 w-[17rem] p-3 rounded-3xl text-[1.5rem]">
                        Contribute a resource
                    </div>

                </div>

                <div class="resources_list w-6/12">
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">Toolkit Fostering open science practises</div>
                            <div class="text-[1rem]">Open science policy instruments</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">Transparency and openness promotion guidelines</div>
                            <div class="text-[1rem]">Centre for Open Science</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">STEM Education Modules</div>
                            <div class="text-[1rem]">Educational modules students</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">Research Ethics Handbook</div>
                            <div class="text-[1rem]">Guidelines for ethical research</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">Science Communication Resources</div>
                            <div class="text-[1rem]">Communication skills</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">Funding Guide for Science Projects</div>
                            <div class="text-[1rem]">Project Funding Guide</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>
                    <div class="resource_items border-2 border-white p-3 rounded-xl bg-white mb-3">
                        <div class="alltext">
                            <div class="text-[1.5rem] font-semibold">Data Visualization Tools</div>
                            <div class="text-[1rem]">Tools for data visualization</div>
                        </div>
                        <div class="bookmarks_image2"><img src="./Icons/bookmark.svg" alt="" srcset="" /></div>
                    </div>


                </div>

                <div class="explore_discovery w-3/12 p-12">
                    <div class="image_RsourceIllustration w-full flex">
                        <img src={ResourceIllustration} className="mx-auto w-40" alt="" srcset="" />
                    </div>
                    <div class="resource_topic text-xl font-semibold text-[1.9rem] p-6 text-center">
                        Scientific Discovery and Resources
                    </div>
                    <div class="resource_content_text text-[1.3rem] px-6 text-center">
                        Explore a wealth of scientific knowledge
                        and collaboration tools. Discover research
                        papers, educational materials, funding
                        opportunities, and more to fuel your
                        scientific journey
                    </div>
                </div>

            </div>

        </div>)
}

export default Resources