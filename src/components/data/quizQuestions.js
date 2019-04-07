var quizQuestions = [
  { E: "Romantic and imaginative", B: "Pragmatic and down to earth" },
  { G: "Takes on confrontations", A: "Avoids confrontations" },
  {
    C: "Diplomatic, charming, and ambitious",
    D: "Direct, formal, and idealistic"
  },
  { H: "Focused and intense", I: "Spontaneous and fun-loving" },
  {
    F: "Hospitable; enjoys welcoming new friends into your life",
    E: "Private person; do not mix much with others"
  },
  {
    B: "Worry about potential problems",
    A: "Don't get worked up about potential problems"
  },
  { G: "Street-smart", D: "High-minded, idealist" },
  { F: "Show affection to people", H: "Maintain distance with people" },
  {
    C: "Go through new experience if it will be useful",
    I: "Go through new experience if it will be enjoyable"
  },
  { E: "Focus too much on myself", A: "Focus too much on others" },
  {
    H: "People depend on my insight and knowledge",
    G: "People depend on my strength and decisiveness"
  },
  { B: "Unsure of myself", D: "Too sure of myself" },
  { F: "Relationship oriented", C: "Goal oriented" },
  {
    E: "Not outspoken",
    I: "Outspoken - I say what others wished they had the nerve to say"
  },
  {
    H: "Always consider alternatives, can't do something definite",
    D: "Difficult to take it easy, be more flexible"
  },
  { B: "Careful, hesitant", G: "Bold, domineering" },
  {
    A: "Gotten into trouble from reluctance to get too involved",
    F: "Gotten in trouble from eagerness to have people depend on me"
  },
  {
    C: "Put feelings aside to get job done",
    E: "I need to work through feelings before acting"
  },
  { B: "Methodical, cautious", I: "Adventurous, take risks" },
  {
    F: "Supportive, giving person, seeks intimacy",
    D: "Serious, reserved, enjoy discussing issues"
  },
  {
    G: "Felt need to be pillar of strength",
    C: "Felt need to perform perfectly"
  },
  {
    H: "Asks tough questions, maintain independence",
    A: "Maintains stability and peace of mind"
  },
  { B: "Cynical, skeptical", F: "Mushy, sentimental" },
  {
    I: "Fear of missing out (FOMO)",
    G: "Fear of being taken advantage of (FOBTAO?)"
  },
  {
    E: "Being stand-offish has annoyed people",
    D: "Being bossy has annoyed people"
  },
  {
    A: "Get anxious if too much excitement and stimulation",
    I: "Get anxious if not enough excitement and stimulation"
  },
  {
    B: "Depended on friends, friends know they can depend on me",
    C: "Don't depend on others, I do things on my own"
  },
  { H: "Detached and preoccupied", E: "Moody, self-absorbed" },
  {
    G: "I like to challenge people, shake them up",
    F: "I like to comfort people, calm them down"
  },
  { I: "Outgoing, sociable", D: "Earnest, self-disciplined" },
  {
    A: "Like to fit in, not stand out",
    C: "Like to stand out, not be undistinguishable"
  },
  {
    H: "Personal interests more important than stability, security",
    B: "Stability, security more important than pursing personal interests"
  },
  { E: "Withdraw during conflict", G: "Rarely back down from conflict" },
  {
    A: "Give in easily, get pushed around",
    D: "Too uncompromising, demanding with others"
  },
  {
    I: "Unsinkable spirit and resourcefulness",
    F: "Deep caring, personal warmth"
  },
  {
    C: "Care about making favorable impression on others",
    H: "Care little about making favorable impressions"
  },
  {
    B: "I depend on my perseverance, common sense",
    E: "I depend on my imagination, moments of inspiration"
  },
  { A: "Easy going, agreeable", G: "Hard-driving, assertive" },
  {
    C: "Work hard to be accepted and well-liked",
    D: "Being accepted and well-liked isn't high priority"
  },
  {
    H: "Become withdrawn from pressure from others",
    I: "Become assertive under pressure from others"
  },
  {
    F:
      "People are interested in me because I've been outgoing, engaging, and interested in them",
    E: "People are interested in me because I've been quiet, unusual, and deep"
  },
  { B: "Duty and responsibility", A: "Harmony and acceptance" },
  {
    G: "Motivate others by making big plans, big promises",
    D: "Motivate others by pointing out consequences"
  },
  {
    H: "Seldom emotionally demonstrative",
    F: "Often emotionally demonstrative"
  },
  { I: "Suck at dealing with details", C: "Great at dealing with details" },
  {
    E: "I emphasize how different I am from people, especially my family",
    A: "I emphasize how much I have in common with people, especially my family"
  },
  {
    H: "I tend to stay on the sidelines",
    G: "I tend to get in the middle of things"
  },
  {
    B: "I have stood by friends, even when they have been wrong",
    D: "I have not wanted to compromise what is right even for friendship"
  },
  { F: "Well-meaning supporter", C: "Highly-motivated go-getter" },
  {
    E: "When troubled, brood about problems",
    I: "When troubled, find distractions"
  },
  {
    D: "Strong convictions, sense of how things should be",
    H: "I have serious doubts and have questioned how things seemed to be"
  },
  {
    B: "Created problems with others by being pessimistic and complaining",
    G: "Created problems with others by being bossy and controlling"
  },
  {
    F: "Act on feelings, let chips fall where they may",
    A: "Don't act on feelings, lest they stir up more trouble"
  },
  {
    C: "Feel natural when center of attention",
    E: "Feel weird when center of attention"
  },
  {
    B: "Careful, prepare for unforeseen issues",
    I: "Spontaneous, improvise as problems arise"
  },
  {
    F:
      "Gotten angry when others have not shown enough appreciation for what I've done for them",
    D: "Gotten angry when others have not listened to what I have told them"
  },
  {
    G: "Being independent and self-reliant has been important to me",
    C: "Being valued and admired has been important to me"
  },
  {
    H: "When debating with friends, I press my arguments forcefully",
    A:
      "When debating with friends, I tend to let things go to prevent hard feelings"
  },
  {
    F: "Possessive of loved ones, trouble of letting them be",
    B: "Tested loved ones to see if they were really there for me"
  },
  {
    G: "Organizing resources and making things happen",
    I: "Coming up with new ideas, getting people excited about them"
  },
  { D: "Driven, hard on myself", E: "Too emotional, undisciplined" },
  {
    I: "Keep life fast-paced, intense, exciting",
    A: "Keep life regular, stable, peaceful"
  },
  {
    B: "Doubt my abilities even though I've had successes",
    C: "Confident in my abilities even though I've had setbacks"
  },
  {
    E: "Dwell on my feelings, hold onto them for a long time",
    H: "Minimize my feelings, don't pay attention to them"
  },
  {
    F: "Provided many people with attention and nurture",
    G: "Provided many people with direction and motivation"
  },
  {
    D: "Serious, strict with myself",
    I: "Free-wheeling and permissive with myself"
  },
  {
    C: "Self-assertive, driven to excel",
    A: "Modest, happy to go at my own pace"
  },
  {
    H: "Proud of my clarity and objectivity",
    B: "Proud of my reliability and commitment"
  },
  {
    E: "Introspective - understanding my feelings is important to me",
    G:
      "Don't spend much time being introspective - getting things done is more important to me"
  },
  {
    A: "I think of myself as a sunny, casual person",
    D: "I think of myself as serious, dignified person"
  },
  { I: "Agile mind, boundless energy", F: "Caring heart, deep dedication" },
  {
    C:
      "Pursued activities that had substantial potential for reward and recognition",
    H:
      "Willing to give up reward and recognition if it meant doing work I was really interested in"
  },
  {
    E: "Fulfilling social obligations isn't high on my priorities",
    B: "I take my social obligations very seriously"
  },
  { G: "I prefer to take the lead", A: "I prefer someone else take the lead" },
  {
    C: "Over the years, my values and lifestyle have changed several times",
    D: "Over the years, my values and lifestyle have remained fairly consistent"
  },
  { I: "Not much self-discipline", H: "Not much connection with people" },
  {
    E: "Withhold my affection, want others to come into my world",
    F: "Give my affection freely, extend myself to others"
  },
  {
    B: "Think of worst case scenarios",
    A: "Think everything will work out for the best"
  },
  {
    G: "People trust me because I am confident and can look out for them",
    D: "People trust me because I am fair and do what is right"
  },
  {
    E:
      "Can get so involved in my own projects that I become isolated from others",
    F: "Can get so involved with others that I neglect my own projects"
  },
  {
    C: "When meeting someone new, I am poised and self-contained",
    I: "When meeting someone new, I am chatty and entertaining"
  },
  { E: "Tend to be pessimistic", A: "Tend to be optimistic" },
  {
    H: "Prefer to inhabit my own little world",
    G: "Prefer to let the world know I'm here"
  },
  {
    B: "Often troubled by nervousness, insecurity, doubt",
    D: "Often troubled by anger, perfectionism, impatience"
  },
  { F: "Often been too personal, intimate", C: "Often been too cool, aloof" },
  {
    E: "Lost out because I don't take enough opportunities",
    I: "Lost out because I pursued too many possibilities"
  },
  {
    H: "Tend to take too long before taking action",
    D: "Tend to act too quickly"
  },
  {
    B: "Usually have difficulty making decisions",
    G: "Seldom have difficulty making decisions"
  },
  {
    F: "Tendency to come on a little too strong with people",
    A: "Tendency to not assert myself enough with people"
  },
  { C: "Even tempered", E: "Strong changes of mood" },
  {
    B: "When unsure, seek advice of others",
    I: "When unsure, try different things to see what works best for me"
  },
  {
    F: "Worry that I'm left out",
    D: "Worry that others' activities would distract me from what I have to do"
  },
  {
    G: "When angry, I have told people off",
    C: "When angry, I have become distant"
  },
  { H: "Tend to have trouble falling asleep", A: "Tend to fall asleep easily" },
  {
    F: "Often think about how I could get closer to others",
    B: "Often think about what others want from me"
  },
  {
    G: "Measured, straight-talking, deliberate",
    I: "Excitable, fast-talking, witty"
  },
  {
    E: "Don't speak up when see others make a mistake",
    D: "Help others see when a mistake is made"
  },
  {
    I: "Stormy person with many volatile feelings",
    A: "Steady person, even-keel emotions"
  },
  {
    C: "When I dislike people, I stay cordial despite my feelings",
    B: "When I dislike people, I let them know somehow"
  },
  {
    E:
      "Difficulty with people due to my touchiness, taking things too personally",
    H: "Difficulty with people due to not caring about social conventions"
  },
  { F: "Jump in and rescue people", G: "Show people how to help themselves" },
  {
    I: "Enjoy letting go, pushing limits",
    D: "Do not enjoy losing control of myself"
  },
  {
    C: "Overly concerned with doing better than others",
    A: "Overly concerned with making things okay for others"
  },
  {
    H: "Thoughts are speculative, imaginative, curious",
    B: "Thoughts are practical, purposeful"
  },
  {
    G: "Main asset is ability to take charge of situations",
    E: "Main asset is ability to describe internal states"
  },
  {
    D:
      "Pushed to get things done correctly, even if it made people uncomfortable",
    A: "Don't like feeling pressured, so I don't pressure others"
  },
  {
    F: "Take pride in how important I am in others' lives",
    I: "Take pride in my gusto and openness to new experiences"
  },
  {
    C:
      "Perceived that I've often come across to others as presentable, admirable",
    H: "Perceived that I've often come across to others as unusual, odd"
  },
  { B: "I do what I have to do", E: "I do what I want to do" },
  {
    G: "Enjoy high pressure, difficult situations",
    A: "Dislike high pressure, difficult situations"
  },
  {
    C:
      "Proud of my ability to be flexible; what's appropriate or important often changes",
    D: "Proud of my ability to take a stand; firm about what I believe in"
  },
  {
    H: "My style is simplicity, austerity",
    I: "My style is excess, over-doing things"
  },
  {
    F: "Own health, well-being has suffered due to my desire to help others",
    E:
      "Relationships have suffered because of my desire to attend to my personal needs"
  },
  { A: "Too open and naive", B: "Too wary and guarded" },
  {
    G: "Sometimes put people off by being too aggressive",
    D: "Sometimes put people off by being too up-tight"
  },
  {
    F: "Helping and tending to needs of others is high priority",
    H: "Finding alternative ways of seeing and doing things is high priority"
  },
  {
    C: "Single minded and persistent in pursing goals",
    I: "Explore various courses of action to see where they lead"
  },
  {
    E: "Drawn to situations that stir up deep, intense emotions",
    A: "Drawn to situations that make me calm and at ease"
  },
  {
    H: "Care less about practical results than about pursing interests",
    G: "Practical, expect my work to have concrete results"
  },
  { B: "Deep need to belong", D: "Deep need to feel balanced" },
  {
    F: "Insisted too much closeness in friendships",
    C: "Kept too much distance in friendships"
  },
  {
    E: "Tendency to think of things from the past",
    I: "Tendency to anticipate things in the future"
  },
  {
    H: "See people as intrusive, demanding",
    D: "See people as disorganized, irresponsible"
  },
  { B: "Generally lack confidence", G: "Generally have confidence" },
  { A: "Too passive and uninvolved", F: "Too controlling and manipulative" },
  {
    E: "Frequently stop myself by self-doubt",
    C: "Rarely let self-doubt stand in my way"
  },
  {
    I: "Prefer something new to something familiar",
    B: "Prefer what I know I like"
  },
  {
    F: "Give physical contact to reassure others about how I feel about them",
    D: "Feel that real love does not depend on physical contact"
  },
  {
    G: "When I needed to confront someone, I've been too harsh and direct",
    C:
      "When I needed to confront someone, I've often beaten around the bush too much"
  },
  {
    H:
      "I've been attracted to subjects that others would find disturbing, frightening",
    A: "I've preferred to not spend time on disturbing, frightening subjects"
  },
  {
    F: "Gotten in trouble with people by being too intrusive, interfering",
    B: "Gotten in trouble with people by being too evasive, uncommunicative"
  },
  {
    G: "Worry that I don't have the resources to fulfill my responsibilities",
    I:
      "Worry that I don't have the self-discipline to focus on what will really fulfill me"
  },
  {
    E: "Highly intuitive, individualistic",
    D: "Highly organized, responsible"
  },
  {
    A: "Overcoming inertia has been one of my main problems",
    I: "Being unable to slow down has been one of my main problems"
  },
  {
    C: "When insecure, I've reacted by becoming arrogant, dismissive",
    B: "When insecure, I've reacted by becoming defensive, argumentative"
  },
  {
    H: "Open-minded, willing to try new approaches",
    E: "Self-revealing, willing to share my feelings with others"
  },
  {
    G: "I act tougher than I really am",
    F: "I act more caring than I really am"
  },
  {
    D: "I follow my conscience and reason",
    I: "I follow my feelings and impulses"
  },
  {
    C: "Serious adversity makes me feel hardened and resolute",
    A: "Serious adversity makes me feel discouraged and resigned"
  },
  {
    B: "I make sure I have a safety net to fall back on",
    H: "I live on the edge and depend on as little as possible"
  },
  {
    G:
      "I have to be strong for others, so I don't have time to deal with my feelings or fears",
    E:
      "I have difficulty coping with my feelings and fears, so it's hard to be strong for others"
  },
  {
    A:
      "I wonder why people focus on negative things when there's so much wonderful things in life",
    D: "I wonder why people are so fucking happy when the world is fucked up"
  },
  {
    F: "I try hard not to be seen as selfish",
    I: "I try hard to not be seen as boring"
  },
  {
    H:
      "I avoid intimacy when I fear I would be overwhelmed by people's needs and demands",
    C:
      "I avoid intimacy when I fear I would not be able to live up to people's expectations of me"
  }
];

export default quizQuestions;
