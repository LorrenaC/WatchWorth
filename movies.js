const movies = [
    {
        id: "ironlung",
        title: "Iron Lung",
        image: "photos/lung.jpg",
        alt: "Iron Lung movie poster",
        stars: "★★★☆☆",
        rating: 3,
        genre: "Horror",
        year: "2026",
        director: "Mark Fischbach",
        category: "New Releases",
        verdict: "Worth Watching",
        text: `Iron Lung (2026) is a claustrophobic sci-fi horror film based on the indie video game, directed, written, and starring Mark Fischbach (Markiplier).

It follows a convict forced to pilot a tiny submarine through a nightmarish “ocean of blood” on a dead moon after a cosmic disaster known as The Quiet Rapture.

The film is widely praised for its oppressive atmosphere, strong sound design, and effective sense of isolation, which make the confined setting genuinely tense and immersive.

It leans heavily into slow-burn psychological horror rather than jump scares, creating a bleak, unsettling mood throughout.

However, many critics also point out its slow pacing and occasionally repetitive structure, with some feeling the storytelling is overly minimal or uneven.

The performance by Markiplier has been described as committed but not always polished, which adds to the film’s indie, experimental feel.

Overall, it’s a bold and atmospheric horror experiment—more about dread and immersion than traditional thrills—and it tends to divide audiences depending on their patience for slow, minimalist storytelling.`
    },

    {
        id: "shawshank",
        title: "The Shawshank Redemption",
        image: "photos/shawshank.jpg",
        alt: "The Shawshank Redemption movie poster",
        stars: "★★★★★",
        rating: 5,
        genre: "Drama",
        year: "1994",
        director: "Frank Darabont",
        category: "Classics",
        verdict: "Must Watch",
        text: `The Shawshank Redemption is a powerful prison drama about hope, patience, and quiet resilience.

It follows Andy Dufresne, a banker wrongly convicted of murder, and his long friendship with fellow inmate Red as they navigate life inside Shawshank Prison.

The film stands out for its slow-burn storytelling and emotional depth rather than action.

It builds a strong sense of atmosphere and gradually shows how hope can survive even in harsh, dehumanizing conditions.

Tim Robbins and Morgan Freeman give understated but very memorable performances that carry much of the film’s emotional weight.

Overall, it’s widely regarded as one of the best films ever made because of its uplifting message, strong character development, and satisfying ending.`
    },

    {
        id: "godfather",
        title: "The Godfather",
        image: "photos/godfather.jpg",
        alt: "The Godfather movie poster",
        stars: "★★★★★",
        rating: 5,
        genre: "Crime",
        year: "1972",
        director: "Francis Ford Coppola",
        category: "Classics",
        verdict: "Must Watch",
        text: `The Godfather (1972) is a landmark crime drama that follows the powerful Corleone family as they navigate loyalty, power, and betrayal within the Mafia world.

It focuses on Michael Corleone’s transformation from reluctant outsider to ruthless leader.

The film is praised for its rich storytelling, masterful direction by Francis Ford Coppola, and iconic performances—especially Al Pacino and Marlon Brando.

Its slow, deliberate pace builds tension and depth, making the character drama feel weighty and realistic.

Overall, it’s widely considered one of the greatest films ever made, known for its influence on cinema and its unforgettable portrayal of power and moral decline.`
    },

    {
        id: "darkknight",
        title: "The Dark Knight",
        image: "photos/knight.jpg",
        alt: "The Dark Knight movie poster",
        stars: "★★★★★",
        rating: 5,
        genre: "Crime",
        year: "2008",
        director: "Christopher Nolan",
        category: "Classics",
        verdict: "Must Watch",
        text: `The Dark Knight (2008) is a superhero crime thriller directed by Christopher Nolan that redefines the genre by treating Gotham City like a grounded crime drama rather than a comic-book setting.

The story follows Batman as he faces his greatest challenge in the Joker, a chaotic criminal mastermind who pushes Gotham—and its heroes—toward moral collapse.

Heath Ledger’s performance as the Joker is widely regarded as iconic, delivering a chilling, unpredictable force that drives the film’s tension.

The film is praised for its tight screenplay, practical action, and philosophical themes about order vs. chaos and ethical limits in times of crisis.

Overall, it’s considered one of the best superhero films ever made and a standout modern crime epic.`
    },

    {
        id: "godfather2",
        title: "The Godfather II",
        image: "photos/godfather2.jpg",
        alt: "The Godfather Part II movie poster",
        stars: "★★★★★",
        rating: 5,
        genre: "Crime",
        year: "1974",
        director: "Francis Ford Coppola",
        category: "Classics",
        verdict: "Must Watch",
        text: `The Godfather Part II (1974) is a sprawling crime epic that serves as both a sequel and a prequel, expanding the Corleone family saga by paralleling Michael Corleone’s reign with the rise of his father, Vito Corleone.

The film is praised for its deep storytelling, emotional complexity, and masterful structure that contrasts Michael’s increasing isolation and moral decay with Vito’s humble ascent to power.

Al Pacino delivers a colder, more hardened performance, while Robert De Niro’s portrayal of young Vito is subtle and compelling.

Often considered equal to or even surpassing the original, it’s widely regarded as one of the greatest films ever made, especially for its ambitious narrative scope and tragic exploration of power and family legacy.`
    },

    {
        id: "angrymen12",
        title: "12 Angry Men",
        image: "photos/men.jpg",
        alt: "12 Angry Men movie poster",
        stars: "★★★★★",
        rating: 5,
        genre: "Drama",
        year: "1957",
        director: "Sidney Lumet",
        category: "Classics",
        verdict: "Must Watch",
        text: `12 Angry Men (1957) is a courtroom drama set almost entirely inside a jury room, where twelve jurors must decide the fate of a young man accused of murder.

The film is praised for its tight, dialogue-driven storytelling and its exploration of prejudice, reasonable doubt, and moral responsibility.

As the jurors debate, one man’s insistence on careful reasoning gradually challenges the group’s assumptions, building tension without any action or location changes.

Sidney Lumet’s direction keeps the single setting visually engaging, and the performances—especially Henry Fonda’s—anchor the moral core of the story.

Overall, it’s considered a masterclass in writing and character-driven drama, showing how intense and gripping a simple conversation can be.`
    },

    {
        id: "lotr",
        title: "The Lord of the Rings: The Return of the King",
        image: "photos/lordofrings.jpg",
        alt: "The Lord of the Rings The Return of the King movie poster",
        stars: "★★★★★",
        rating: 5,
        genre: "Fantasy",
        year: "2003",
        director: "Peter Jackson",
        category: "Classics",
        verdict: "Must Watch",
        text: `The Lord of the Rings: The Return of the King (2003) is the epic conclusion to Peter Jackson’s fantasy trilogy, bringing the struggle for Middle-earth to a massive and emotional finale.

The film follows the final battle against Sauron while Frodo and Sam complete their dangerous journey to destroy the One Ring.

It balances huge war sequences with quieter, emotional moments of friendship, sacrifice, and endurance.

It’s praised for its scale, visual effects, and powerful storytelling, especially its multiple climaxes that tie together long-running character arcs.

With sweeping cinematography and a deeply satisfying resolution, it’s widely regarded as one of the greatest fantasy films ever made and a landmark in cinematic storytelling.`
    },

    {
        id: "hailmary",
        title: "Project Hail Mary",
        image: "photos/hailmary.jpg",
        alt: "Project Hail Mary movie poster",
        stars: "★★★★☆",
        rating: 4,
        genre: "Sci-Fi",
        year: "2026",
        director: "Phil Lord and Christopher Miller",
        category: "New Releases",
        verdict: "Worth Watching",
        text: `Project Hail Mary is a sci-fi adaptation of Andy Weir’s novel that mixes high-stakes space survival with humor and emotional depth.

Starring Ryan Gosling as Ryland Grace, the film follows a lone astronaut trying to save Earth from a mysterious cosmic threat while piecing together his lost memories.

It keeps the book’s focus on problem-solving and scientific ingenuity, but also leans into character-driven moments and an unexpected, heartfelt connection at the center of the story.

The movie is praised for its visual effects, engaging pacing, and Gosling’s grounded performance, though some feel certain scientific details are simplified compared to the novel.

Overall, it’s an entertaining and emotional sci-fi adventure that balances big ideas with a very human story.`
    },

    {
        id: "supermario",
        title: "The Super Mario Galaxy Movie",
        image: "photos/supermario.jpg",
        alt: "The Super Mario Galaxy Movie poster",
        stars: "★★★☆☆",
        rating: 3,
        genre: "Adventure",
        year: "2026",
        director: "Unknown",
        category: "New Releases",
        verdict: "Mixed",
        text: `The Super Mario Galaxy Movie is a bright, fast-moving animated adventure that leans heavily on imagination and visual spectacle.

The space-themed worlds are creative and colorful, and the film does a good job of capturing the playful energy of the games, with plenty of action, humor, and fan service for longtime Mario fans.

However, the story is fairly simple and sometimes feels rushed, as it jumps quickly between set pieces without much time for deeper character development.

While the humor and visuals keep it engaging, emotional moments don’t always land as strongly as they could.

Overall, it’s an enjoyable and entertaining ride, especially for families and fans of the franchise, but it prioritizes style and fun over storytelling depth.`
    },

    {
        id: "crime101",
        title: "Crime 101",
        image: "photos/crime101.jpg",
        alt: "Crime 101 movie poster",
        stars: "★★★★☆",
        rating: 4,
        genre: "Crime",
        year: "2026",
        director: "Bart Layton",
        category: "New Releases",
        verdict: "Worth Watching",
        text: `Crime 101 is a tense, stylish crime thriller that focuses on a high-stakes cat-and-mouse story in the world of professional heists and organized crime.

The film stands out for its gritty atmosphere, strong pacing, and a grounded tone that keeps the tension steady throughout.

It leans more toward mood and suspense than flashy action, which gives it a more realistic edge compared to typical crime blockbusters.

However, the story can feel a bit familiar at times, following genre beats without many big surprises.

Some characters are interesting but not deeply explored, and a few emotional moments don’t fully land because the film stays focused on plot momentum.

Overall, it’s a solid and engaging crime thriller—well-made and suspenseful, even if it doesn’t break new ground in the genre.`
    },

    {
        id: "thedrama",
        title: "The Drama",
        image: "photos/drama.jpg",
        alt: "The Drama movie poster",
        stars: "★★★★☆",
        rating: 4,
        genre: "Drama",
        year: "2026",
        director: "Kristoffer Borgli",
        category: "New Releases",
        verdict: "Worth Watching",
        text: `The Drama is a dark romantic comedy that starts off like a typical charming pre-wedding couple story before gradually turning into something much more uncomfortable and psychologically tense.

The film stands out for its strong performances—especially Zendaya and Robert Pattinson—who carry the shifting tone between humor, awkwardness, and emotional distress very effectively.

Visually and stylistically, it’s sharp and well-directed, with a constant sense of tension building underneath even the lighter scenes.

However, the story can feel divisive.

While its bold twist and themes about honesty, relationships, and personal history are interesting, some viewers may find the narrative a bit uneven or provocative in a way that doesn’t fully resolve its ideas.

It raises more questions than it answers, which works for some but may frustrate others.

Overall, it’s a compelling, uneasy, and well-acted film that sticks with you, even if it’s not always comfortable or clean in its storytelling.`
    },

    {
        id: "pizzamovie",
        title: "Pizza Movie",
        image: "photos/pizza.jpg",
        alt: "Pizza Movie poster",
        stars: "★★★☆☆",
        rating: 3,
        genre: "Comedy",
        year: "2026",
        director: "Unknown",
        category: "New Releases",
        verdict: "Mixed",
        text: `Pizza Movie is a lighthearted, absurd comedy built around a simple but playful premise involving a struggling pizzeria that gets caught up in increasingly chaotic situations.

The film leans heavily into humor, with exaggerated characters, fast-paced gags, and a quirky tone that doesn’t take itself seriously at all.

Its charm comes from its energy and willingness to embrace silliness rather than realism.

That said, the story is very thin and mostly serves as a setup for jokes rather than a structured narrative.

Some humor lands well, especially in group scenes, but it can also feel repetitive or chaotic over time.

The characters are likable but fairly one-dimensional, and emotional depth is minimal.

Overall, it’s a goofy, easy watch—best enjoyed as a fun background comedy rather than a meaningful story.`
    },

    {
        id: "mikenickalice",
        title: "Mike & Nick & Nick & Alice",
        image: "photos/mike.jpg",
        alt: "Mike and Nick and Nick and Alice movie poster",
        stars: "★★★☆☆",
        rating: 3,
        genre: "Drama",
        year: "2026",
        director: "BenDavid Grabinski",
        category: "New Releases",
        verdict: "Mixed",
        text: `Mike & Nick & Nick & Alice is a character-driven ensemble film that blends comedy and drama through the tangled relationships between four friends whose lives keep overlapping in unexpected and often messy ways.

The film’s strength lies in its dialogue and chemistry between the cast, with several sharp, funny, and emotionally grounded scenes that highlight the dynamics of friendship, jealousy, and misunderstanding.

However, the narrative can feel a bit scattered due to its shifting focus between multiple characters, and not every storyline gets the same level of depth or payoff.

Some emotional arcs work really well, while others feel underdeveloped or slightly rushed.

Overall, it’s an engaging and thoughtful film with strong performances and moments of genuine heart, even if its structure is a bit uneven.`
    },

    {
        id: "theroom",
        title: "The Room",
        image: "photos/room.jpg",
        alt: "The Room movie poster",
        stars: "★★☆☆☆",
        rating: 2,
        genre: "Drama",
        year: "2003",
        director: "Tommy Wiseau",
        category: "Lowest Rated",
        verdict: "Skip",
        text: `The Room is a famously strange independent drama that has become known more for its unintended comedy than its original intention as a serious emotional story.

It follows a melodramatic love triangle, but the dialogue, acting, and pacing often feel awkward or unnatural, creating a viewing experience that is unintentionally funny and deeply bizarre.

Despite its technical and narrative flaws, the film has gained a strong cult following because of its so bad it’s good charm, memorable lines, and endlessly quotable scenes.

It’s less a traditional drama and more a cultural phenomenon that people enjoy for group watch reactions and irony.

Overall, it’s widely considered one of the most unintentionally entertaining cult films ever made, even if not in the way it originally intended.`
    },

    {
        id: "movie43",
        title: "Movie 43",
        image: "photos/movie43.jpg",
        alt: "Movie 43 poster",
        stars: "★☆☆☆☆",
        rating: 1,
        genre: "Comedy",
        year: "2013",
        director: "Various",
        category: "Lowest Rated",
        verdict: "Skip",
        text: `Movie 43 is an anthology comedy made up of a series of disconnected sketches, each directed by different filmmakers and featuring a large ensemble cast.

The film aims for shock humor and outrageous setups, with sketches that lean heavily into crude jokes, absurd scenarios, and intentionally offensive comedy.

On paper, it tries to be a bold, boundary-pushing comedy experiment with lots of star power.

In practice, however, it was widely criticized for its uneven quality, weak writing, and inconsistent tone.

While a few segments land better than others, most feel forced or aimless, and the overall structure doesn’t come together as a satisfying film.

Even the star-studded cast is often underused in brief, awkward roles.

Overall, it’s generally regarded as a chaotic and poorly received comedy anthology that struggles to deliver effective humor despite its ambitious concept.`
    },

    {
        id: "catwoman",
        title: "Catwoman",
        image: "photos/cat.jpg",
        alt: "Catwoman movie poster",
        stars: "★★☆☆☆",
        rating: 2,
        genre: "Action",
        year: "2004",
        director: "Pitof",
        category: "Lowest Rated",
        verdict: "Skip",
        text: `Catwoman is a superhero action film loosely based on the DC character, but it significantly departs from the source material, focusing on a new origin story and a stylized, cat-themed vigilante concept.

The film is visually flashy, with heavy use of slow-motion action scenes and a glossy, music-video-like aesthetic.

Halle Berry’s committed performance stands out, and the costume design and visual style were clearly aiming for a sleek, edgy tone.

However, the film is widely criticized for its weak script, uneven pacing, and lack of coherent storytelling.

The plot is thin and often feels disjointed, with underdeveloped characters and dialogue that doesn’t land effectively.

Despite its ambitious style, it fails to build emotional weight or engaging stakes.

Overall, it’s a visually stylized but poorly received superhero film that is often remembered more for its missteps than its successes.`
    },

    {
        id: "airbender",
        title: "The Last Airbender",
        image: "photos/airbender.jpg",
        alt: "The Last Airbender movie poster",
        stars: "★★☆☆☆",
        rating: 2,
        genre: "Fantasy",
        year: "2010",
        director: "M. Night Shyamalan",
        category: "Lowest Rated",
        verdict: "Skip",
        text: `The Last Airbender is a fantasy adventure adaptation that attempts to condense a rich animated series into a single live-action film, but ends up feeling rushed and uneven.

The visuals are often polished, and the elemental bending effects can look impressive at times, but they don’t fully capture the energy or personality of the original material.

The story moves quickly through major plot points without much emotional buildup or character development.

One of the biggest criticisms is the flat pacing and stilted dialogue, which makes it hard for the characters to feel engaging or memorable.

Important relationships and arcs feel underdeveloped, and the film struggles to balance exposition with action.

Overall, it’s a visually ambitious but widely criticized adaptation that doesn’t capture the depth or charm of the source series.`
    },

    {
        id: "battlefield",
        title: "Battlefield Earth",
        image: "photos/battlefield.jpg",
        alt: "Battlefield Earth movie poster",
        stars: "★☆☆☆☆",
        rating: 1,
        genre: "Sci-Fi",
        year: "2000",
        director: "Roger Christian",
        category: "Lowest Rated",
        verdict: "Skip",
        text: `Battlefield Earth is a sci-fi action film set in a dystopian future where Earth is controlled by an alien race, and humanity is reduced to a primitive state.

The story follows a rebellion against the alien oppressors, but it unfolds in a way that feels heavily simplified and uneven.

The film uses exaggerated camera angles, unusual visual choices, and an over-stylized presentation that gives it a very distinct—if polarizing—look.

However, it was widely criticized for its execution, including its dialogue, pacing, and character development.

Many scenes feel overlong or awkwardly structured, and the narrative struggles to maintain momentum or emotional engagement.

Despite its large-scale premise, it doesn’t fully deliver on the potential of its world-building.

Overall, it’s often viewed as a poorly received sci-fi film with ambitious ideas but a highly flawed execution.`
    },

    {
        id: "plan9",
        title: "Plan 9 from Outer Space",
        image: "photos/plan9.jpg",
        alt: "Plan 9 from Outer Space movie poster",
        stars: "★★☆☆☆",
        rating: 2,
        genre: "Horror",
        year: "1959",
        director: "Ed Wood",
        category: "Lowest Rated",
        verdict: "Skip",
        text: `Plan 9 from Outer Space is a low-budget sci-fi horror film directed by Ed Wood that has become legendary for its numerous technical flaws and unintentionally comedic execution.

The story involves aliens resurrecting the dead to stop humanity from creating a weapon that could destroy the universe, but the plot is mostly a backdrop for disjointed scenes, awkward dialogue, and continuity errors.

The production quality is famously amateurish, with visible boom mics, shaky sets, and inconsistent editing.

Despite or because of its flaws, the film has gained a strong cult status as one of the most iconic so bad it’s good movies ever made.

Its sincerity, combined with its lack of polish, gives it a unique charm that has fascinated audiences and filmmakers alike.

Overall, it’s widely regarded as a cinematic failure in traditional terms, but also as a beloved cult classic that’s entertaining in a completely unintended way.`
    }
];

function getMovieById(id) {
    return movies.find(movie => movie.id === id);
}
