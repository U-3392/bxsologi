import React from "react";
 
const Documentation = () => {
    return (
        <div>
            <h1>
                Documentation
            </h1>
            <p>
                <i>This section attempts to explain my thought process behind this site, as well as future ideas I have for improving the site. </i>
            </p>
            <p><b>VERY IMPORTANT NOTE: </b> a previous version of the site was causing crashes in Chrome browsers (I use Firefox so I didn't notice this). I quickly pulled the affected sections of the site down, so if you viewed a page before and it appeared to have nothing on it, this is because it was one of the affected sections. Sorry for the inconvenience.</p>

            <h2>
                General thoughts
            </h2>
            <p>
                The assignment was to create the "best team" out of a spreadsheet of data. I explicitly decided against a machine-learning approach because the lack of data, even if 
                I tried to supplement it with resurrected data from previous years, would lead to overfitting. Instead, I tried to think through various problems in the current logistics process
                (as I understand it, as I have heard of and experienced problems directly from logistical issues concerning logistics processes). 
            </p>
            <p>
                The primary issues I focused on solving, from most to least important, were:
                <ol>
                    <li>Easily finding suitable people to "fit" within a team roster.</li>
                    <li>Collating all relevant logistics information into one place.</li>
                    <li>"Predicting the future" of any given partnership to optimize them.</li>
                </ol>
            </p>
            <p>
                I did not know <b>any JavaScript</b> and I knew <b>very minimal web development</b> before this assignment. This demonstrates my capabilities to learn quickly and to dynamically respond to SciOly demands for projects.
            </p>

            <h2>
                Search Functionality
            </h2>
            <p>
                The primary issue with logistics team selection is finding appropriate people to fill the team (crazy, I know). From my understanding of the process, people are selected
                via a mixture of picking the "obvious" best people, then filling in the gaps via memory ("oh, this person is hardworking/is okay at xyz events which we need/etc"). This is, 
                needless to say, a pretty inefficient way of handling these logistics. 
            </p>
            <p>
                However, we already have the data we need to find people we need -- through competitions! A filtering mechanism that can go past the limitations of Google Sheets is useful, so I made it. 
            </p>
            <p>
                Note that for the sake of time, I didn't convert everything in the spreadsheet given to the JSON -- there are about 10 data entries, which should be enough to demonstrate the search/filter itself.
                Also, please never mix-and-match Rank versus Score again. This was horrible. I just skipped everyone with events that were mainly score. If I was able to magically control how the data entry worked,
                I would suggest to just use score for everything that we know (so basically just in diagnostics) and it would be relatively trivial to automatically calculate the rank given the score. There could also
                be an automatic function that auto-sets if score should be considered, not just rank. 
            </p>
            <h3>
                Disclaimer
            </h3>
            <p>To emphasize how simple (if tedious) the conversion from the Google Sheet to JSON is, here's a list showing the structure of the JSON for an individual competitor:
                <ul>
                    <li>Name</li>
                    <li>Grade</li>
                    <li>
                        Competitions
                        <ul>
                            <li>Competition Name</li>
                            <li>
                                Scores
                                <ul>
                                    <li>Event name</li>
                                    <li>Placement</li>
                                    <li>Total</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                <b>Future plans:</b>
                <ul>
                    <li>Actually add the entire database LMAO</li>
                    <li>Create way to input data (API call to Google Sheet for diagnostics, API call to Duosmium for other competitions)</li>
                    <li>More filters (e.g., generic "bio events"/"chem events" etc instead of each individual event, more ephemeral traits based on like EM/SD "reviews"?? that might not go over well but it would be interesting...)</li>
                    <li>Following someone's entire "SciOly career" aka showing placements in past years as well</li>
                </ul>
            </p>

            <h2>
                Roster Design
            </h2>
            <p>
                A person's working memory can contain, at most, around seven items. Thus, juggling 15+ competitors, as well as block schedules, where events are located, etc. is
                a large strain on one person and thus inevitably leads to forgetting things -- leading to issues such as scheduling one person to compete in two events in the same block
                (which actually happened, although not to me). 
            </p>
            <p>
                Thus, I wanted to create a comprehensive place where all of this information could be stored and manipulated. Thus enters the Roster Creator!! Blocks/schedule on the left, events in the middle, people on the right.
            </p>
            <p>
                <b>Future plans:</b>
                <ul>
                    <li>Multiuser capabilities ? (pretty hard to do especially when there's an easy solution to it)</li>
                    <li>More features based on logistics feedback</li>
                    <li>Ability to export as CSV</li>
                </ul>
            </p>

            <h2>
                Simulations
            </h2>
            <p>
                This is less of a logistics-only tool and more of a tool that could be helpful for everyone, a la the Albert tool that calculates a predicted AP Score based on how one does
                on each individual section of an AP test. It works essentially the same as the Albert tool, except how well one does on each individual section is a percentage rather than a 
                points/total system. 
            </p>
            <p>
                <b>Future plans:</b>
                <ul>
                    <li>Add more events through asking each EM how they would section off their event.</li>
                    <li>Add more ways of splitting the test ("optimal" versus "random" versus "half-and-half on every section" versus...)</li>
                    <li>Create large database of percentage-section breakdowns for various tests. This also happens to be generally helpful for SciOly competitors (IMO)</li>
                </ul>
            </p>
        </div>
    );
};
 
export default Documentation;