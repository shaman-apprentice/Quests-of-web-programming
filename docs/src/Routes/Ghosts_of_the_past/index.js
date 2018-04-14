import * as React from 'react';

export const Ghosts_of_the_past = () => (
    <React.Fragment>
        <h2 style={{textAlign: 'center'}}>Ghosts of the past</h2>
        <p>
            The paper <a href="https://www.w3.org/History/1989/proposal.html">Information Management: A Proposal</a> by
            Tim Berners-Lee in 1989 is commonly stated as the birth of the world wide web (www). In its origin
            it was 'only' meant to be a static content management system to keep information and make them retrievable
            at CERN (the European Organization for Nuclear Research).
        </p>
        <p>
            <em>Since then, a lot of things have changed, especially at the front end. You might say, that
            technology as well as demands have developed a lot. But you might also say, that they have
            grown historical and are only partially well designed</em> 😇
        </p>
        <p>
            Simplified there were two cyclically repeating phases: First that browser vendors ignore (partially)
            standards on purpose, so that websites only look cool with their browser. And second that they realise
            web development as well as user experience is not really fun with all those browser incompatibilities.
            So they accept / help / donate a lot of money to a standard given organization for web technologies (W3C).
            Some ridiculous fun fact in this repeating cycle: During the first browser war the vendors advertised heavily,
            that they support the latest HTML3 standards, but their was never an official HTML3.
        </p>
        <p>The following quote summarise nicely, that the given standards are not perfect:</p>
        <div style={{marginLeft: '2em'}}><em>
            <p>'A bug deployed in a software for a long term becomes a feature.</p>

            <p>
                It’s specifically true in a distributed environment where pieces are loosely joined: the Web.
                Softwares are released with their inherent bugs. Content and framework developers are hit by the bug.
                They modify their own software to accommodate the bug or take advantage of it.
                No new version of the buggy software is released for a long time. When it is finally time to release
                a new version, the buggy software has to keep the bug as a feature to not break anything on the Web.
                Eventually, one day the bug makes its way to a specification like html 5.
            </p>

            <p>
                It is difficult to change things because they are all intertwined but in a very loose way,
                which makes its strength. You can try to fix the software knowing that it will break things at many places.
                You have then to be ready to loose customers if someone else as implemented the bug.Users are not aware of the bug,
                and they don’t really care about it. Fixing means also, in this case, educating people about the issue,
                and content developers on how to fix their content. Content developers will be the hardest ones.
                If they fix, knowing that it will break things in other softwares, they will loose customers.
                So they are not likely to do it.' (<a href="https://www.w3.org/blog/2008/07/interoperability-release-cycle/">W3C blog</a>)
            </p>
        </em></div>
        <p>
            Fortunately every party has realised the need for 'short' release cycles meanwhile. New versions of HTML
            are planed roughly every year driven by W3C and WHATWG since 2014. Same goes for ECMAScript.
        </p>
        <div>
            <p style={{marginBottom: '-1em'}}>For a nice spooky ending below my personal 3 favorite javascript examples:</p>
            <pre>
                <code>
                    {`
    [null] == ![''] // true
    [undefined] == 0 // true

    var sum = 0;
    for (var i in [1,2,3]) {
        sum += i;
    }
    sum === 2 // true
                    `}
                </code>
            </pre>
        </div>
    </React.Fragment>
)