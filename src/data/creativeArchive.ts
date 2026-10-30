/**
 * NEXUS Creative Archive Data Store
 * "BETWEEN LOGIC AND DARKNESS"
 *
 * Content Architecture for Ankit Singha's creative & philosophical archive.
 *
 * NOTE ON CONTENT INTEGRITY:
 * - No fabricated autobiographical statements or false third-party citations.
 * - Verses and fragments are structured thematic reflections exploring human emotions,
 *   duality, logic, existential inquiry, and creative synthesis.
 * - Editable draft slots are explicitly tagged as such for future expansion.
 */

export type CreativeCategory =
  | 'all'
  | 'love'
  | 'hatred'
  | 'duality'
  | 'darkness'
  | 'existence'
  | 'identity'
  | 'contradiction'
  | 'philosophy';

export interface CreativeCategoryMeta {
  id: CreativeCategory;
  label: string;
  description: string;
  count?: number;
}

export const CREATIVE_CATEGORIES: CreativeCategoryMeta[] = [
  { id: 'all', label: 'All Writings', description: 'The entire compendium of verses, reflections, and philosophical manuscripts.' },
  { id: 'duality', label: 'Duality', description: 'The unresolved tension between logic and passion, light and abyss.' },
  { id: 'love', label: 'Love', description: 'Gravity, devotional vulnerability, and the ache of fleeting human connection.' },
  { id: 'hatred', label: 'Hatred', description: 'The cold iron of betrayal, indignation, and righteous severance.' },
  { id: 'darkness', label: 'Darkness', description: 'The quiet sanctuary of the void where unadorned truth resides.' },
  { id: 'existence', label: 'Existence', description: 'Meditations on mortality, entropy, and consciousness in a cold cosmos.' },
  { id: 'identity', label: 'Identity', description: 'The splintered self, masks worn for survival, and the core beneath.' },
  { id: 'contradiction', label: 'Contradiction', description: 'The simultaneous coexistence of mutually exclusive truths.' },
  { id: 'philosophy', label: 'Philosophy', description: 'Axioms, epistemological inquiries, and limits of human measure.' },
];

export interface Verse {
  id: string;
  title: string;
  category: CreativeCategory;
  categoryLabel: string;
  subtitle?: string;
  date?: string; // Only provided when verified
  stanzas: string[];
  epigraph?: string;
  contemplation?: string;
  isDraft?: boolean;
}

export interface DualityPair {
  id: string;
  title: string;
  leftPole: {
    name: string;
    archetype: string;
    color: string; // Tailwind color class or hex
    axiom: string;
    passage: string[];
    sentiment: string;
  };
  rightPole: {
    name: string;
    archetype: string;
    color: string;
    axiom: string;
    passage: string[];
    sentiment: string;
  };
  synthesis: string;
}

export interface Fragment {
  id: string;
  number: string;
  category: CreativeCategory;
  categoryLabel: string;
  statement: string;
  context?: string;
  date?: string;
}

export interface Manuscript {
  id: string;
  title: string;
  subtitle: string;
  category: CreativeCategory;
  categoryLabel: string;
  estimatedReadTime: string;
  date?: string;
  epigraph: {
    quote: string;
    author: string;
  };
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  coda: string;
}

export interface UnwrittenPassage {
  id: string;
  coordinates: string;
  revelationThreshold: number; // 0 to 100 illumination
  lines: string[];
  ambientNote: string;
}

/* ─────────────────────────────────────────────────────────────
 * 1. THE ARCHIVE — Primary Verses
 * ───────────────────────────────────────────────────────────── */
export const ARCHIVE_VERSES: Verse[] = [
  {
    id: 'asymptote-of-longing',
    title: 'The Asymptote of Longing',
    subtitle: 'On proximity without contact',
    category: 'love',
    categoryLabel: 'Love & Distance',
    epigraph: 'We approach each other through infinity, yet the distance between us refuses to collapse to zero.',
    stanzas: [
      'We were born under the law of parallel trajectories,\ngleaming through the obsidian vacuum of night,\neach curve mathematically drawn toward the other,\nyet forbidden by geometry to ever collide.',
      'I have mapped the millimeters of your silence,\ncloser than breath, colder than space;\nan infinite approach that burns like touch,\nyet leaves the horizon intact and untouched.',
      'If love is an equation that cannot close its brackets,\nthen let me stay within the error margin,\ncontent to feel the gravity that pulls me,\neven as the axes carry us apart forever.',
    ],
    contemplation:
      'A poetic exploration of emotional asymptotic curves: two conscious minds that come infinitely close in spiritual communion, yet remain constrained by individual mortality and internal boundaries.',
  },
  {
    id: 'cold-iron-severance',
    title: 'The Geometry of Spite',
    subtitle: 'When warmth crystallizes into defense',
    category: 'hatred',
    categoryLabel: 'Hatred & Severance',
    epigraph: 'Hatred is not the opposite of devotion; it is devotion after the temple has burned to the waterline.',
    stanzas: [
      'Do not mistake this quiet for forgiveness;\nit is merely the temper of quenched steel.\nI do not burn with petty vengeance;\nI have built an architecture where you no longer exist.',
      'Every soft impulse has been forged into armor,\nriveted with memory, sealed against intrusion.\nWhere once blood rushed toward your calling,\nnow lies only granite, measured and still.',
      'To hate properly is to understand geometry:\nyou do not storm the perimeter of the betrayer;\nyou simply shift the origin point of the universe\nuntil they are no longer in the coordinate plane.',
    ],
    contemplation:
      'Reflecting on indignation and emotional severance—not as reckless rage, but as an austere, crystalline restructuring of personal boundaries after deep disillusionment.',
  },
  {
    id: 'the-double-exposure',
    title: 'The Double Exposure',
    subtitle: 'On internal contradiction',
    category: 'contradiction',
    categoryLabel: 'Contradiction & Duality',
    epigraph: 'To be alive is to harbor two warring cities within the same ribcage.',
    stanzas: [
      'Inside my chest, the architect drafts an unyielding vault,\nevery lintel calculated, every stress point reinforced,\nwhile underneath the foundation, the poet digs in the dark,\npraying for an earthquake that will let the wild sky through.',
      'I crave the certainty of clockwork mechanisms,\nthe cold comfort of logic that cannot lie,\nyet weep for the untamed storm outside the window\nthat shatters the glass with irrational grace.',
      'We are neither the prison nor the escapee;\nwe are the hinge between the iron door and the open wilderness,\nsinging in both keys at once.',
    ],
    contemplation:
      'The eternal human struggle between the desire for unassailable structural control and the primal hunger for unrestrained vulnerability.',
  },
  {
    id: 'the-sanctuary-of-the-void',
    title: 'Sanctuary of the Void',
    subtitle: 'Finding solace in unmeasured silence',
    category: 'darkness',
    categoryLabel: 'Darkness & Rest',
    epigraph: 'The light demands performance; the darkness merely lets you breathe.',
    stanzas: [
      'All day the sun demands an answer:\nWho are you? What have you built? What have you conquered?\nIt glares upon every unfinished stone,\nmeasuring value with merciless daylight.',
      'Then falls the quiet curtain of the dark—\nno scrutiny, no ledger, no audience.\nThe room dissolves into quiet vapor,\nand the weary self lays down its standard.',
      'In darkness, I am not a project to be completed,\nnor a monument waiting to be admired;\nI am only consciousness listening to the rain,\nat peace with what remains unmade.',
    ],
    contemplation:
      'An ode to nocturnal silence as a restorative refuge from modern performative exhaustion.',
  },
  {
    id: 'the-observer-curse',
    title: "The Observer's Curse",
    subtitle: 'On living as a spectator to one’s own existence',
    category: 'identity',
    categoryLabel: 'Identity & Consciousness',
    epigraph: 'I watch myself laugh, and wonder who decided the joke was funny.',
    stanzas: [
      'There is a second witness standing in the doorway of my mind,\nobserving every grief, every embrace, every spoken word.\nEven when tears sting my eyes,\nthe witness takes notes on the salinity of water.',
      'How does one simply enter life without an audit?\nHow do others stand in the current\nwithout calculating the flow rate, the friction coefficient,\nand the probable depth of drowning?',
      'I want to forget the diagram of the fire\nand simply burn,\njust once,\nwithout recording the temperature.',
    ],
    contemplation:
      'Examining the hyper-analytical consciousness that struggles to surrender to unfiltered experience without compulsive self-observation.',
  },
  {
    id: 'entropy-lullaby',
    title: "Entropy's Lullaby",
    subtitle: 'On the nobility of transient things',
    category: 'existence',
    categoryLabel: 'Existence & Decay',
    epigraph: 'The stars do not mourn their burning; why should we tremble before the dark?',
    stanzas: [
      'Every stone monument is a slow liquid,\nevery dynasty a transient ripple on deep water.\nWe build with frantic hands against the quiet tide,\nforgetting that beauty belongs only to things that end.',
      'A diamond is immortal, and therefore cold and dull;\nbut an apple blossom lasts three mornings in the wind,\nand in those seventy hours holds more meaning\nthan ten billion tons of silent quartz.',
      'Let the systems run down, let the signals fade;\nwe were here for an unrepeatable hour,\nand the dark will remember that we sang.',
    ],
    contemplation:
      'A meditation on mortality and finite existence: impermanence is not a flaw in creation, but the sole condition that makes meaning possible.',
  },
  {
    id: 'the-unspoken-axiom',
    title: 'The Unspoken Axiom',
    subtitle: 'The limits of formal logic',
    category: 'philosophy',
    categoryLabel: 'Philosophy & Mystery',
    epigraph: 'The most important truths are the ones that break the theorem.',
    stanzas: [
      'We spent twenty years refining the symbols,\nbanishing ambiguity, standardizing the proofs.\nWe wanted a world that could be solved\nlike an elegant matrix with zero residual error.',
      'Then grief arrived, unannounced and uncalculated,\nrefusing every variable we offered.\nIt occupied the empty space between the lines,\nproving that the vessel was never meant to hold the ocean.',
      'Now I revere the unprovable:\nthe sudden mercy of a stranger,\nthe ache of music heard in an empty street,\nthe quiet confession whispered into the dark.',
    ],
    contemplation:
      'Acknowledging the epistemological boundary where formal systems exhaust their explanatory power and genuine human experience begins.',
  },
  {
    id: 'the-mirror-dossier',
    title: 'The Mirror Dossier',
    subtitle: 'Draft entry — open literary ledger',
    category: 'duality',
    categoryLabel: 'Duality & Self',
    stanzas: [
      'Two reflections stare back from the polished glass:\none is the technician who holds the world together with wires;\nthe other is the wanderer who wanders into the forest at midnight,\nseeking the source of the wind.',
      '[Open literary slot — preserved for unadorned verses authored during quiet night watches]',
    ],
    contemplation:
      'An editable literary slot reserved for original additions, preserving content authenticity without synthetic filler.',
    isDraft: true,
  },
];

/* ─────────────────────────────────────────────────────────────
 * 2. DUALITY — Interactive Opposing Emotional Dimensions
 * ───────────────────────────────────────────────────────────── */
export const DUALITY_PAIRS: DualityPair[] = [
  {
    id: 'logic-vs-emotion',
    title: 'Logic vs. Emotion',
    leftPole: {
      name: 'Deterministic Logic',
      archetype: 'The Iron Sovereign',
      color: '#4cd7f6', // Cyan
      axiom: 'If it cannot be formulated without contradiction, it cannot be trusted.',
      passage: [
        'Strip the illusion of sentiment from the machine.',
        'Emotions are volatile surges of endocrine telemetry, clouding the objective axis.',
        'Here lies clarity: unambiguous states, predictable transitions, and the calm of deterministic equilibrium.',
        'Measure the latency. Enforce the boundary. Survive the anomaly.',
      ],
      sentiment: 'CERTAINTY THROUGH RESTRAINT',
    },
    rightPole: {
      name: 'Irrational Fire',
      archetype: 'The Storm Wanderer',
      color: '#ff6b8b', // Crimson Rose
      axiom: 'A heart that never shatters has never dared to beat.',
      passage: [
        'Burn the ledger and step into the uncalculated squall.',
        'No great love was ever born from a risk assessment matrix, and no epic began with caution.',
        'We bleed because we exist; we weep because things matter.',
        'Let the certainty crumble if it keeps the blood alive and the fire unquenched.',
      ],
      sentiment: 'VULNERABILITY THROUGH SURRENDER',
    },
    synthesis:
      'Logic without emotion is an empty machine; emotion without logic is a consuming conflagration. Wisdom is the fragile fulcrum upon which both burn in unresolvable balance.',
  },
  {
    id: 'light-vs-darkness',
    title: 'Light vs. Darkness',
    leftPole: {
      name: 'Illuminated Order',
      archetype: 'The Sunlit Scribe',
      color: '#d0bcff', // Electric Violet
      axiom: 'To name the shadow is to begin to master it.',
      passage: [
        'Step into the harsh glare of noon where nothing can hide.',
        'Expose the blueprint, annotate the vulnerabilities, and catalog the truth under direct beam.',
        'Light demands transparency; it cleanses deceit and leaves no room for ambiguous specters.',
      ],
      sentiment: 'PERFORMANCE UNDER SCRUTINY',
    },
    rightPole: {
      name: 'Abyssal Sanctuary',
      archetype: 'The Nocturnal Shadow',
      color: '#707793', // Ghost Muted Blue
      axiom: 'The stars are invisible until the sun has the courtesy to die.',
      passage: [
        'Retreat to the velvet dark where no expectations linger.',
        'In the abyss, there is no persona to uphold, no grade to earn, and no audience to appease.',
        'Darkness is the primordial soil from which all seeds germinate before breaking into the light.',
      ],
      sentiment: 'SOLACE IN UNWITNESSED TRUTH',
    },
    synthesis:
      'Light reveals the surface of the world; darkness reveals the depth of the soul.',
  },
  {
    id: 'love-vs-hatred',
    title: 'Love vs. Hatred',
    leftPole: {
      name: 'Devotional Gravity',
      archetype: 'The Keeper of Embers',
      color: '#c4e7ff', // Soft Sky
      axiom: 'To love is to hand someone a blade and trust them not to twist it.',
      passage: [
        'A surrender so profound it makes all fortifications obsolete.',
        'You open your ribcage to a stranger and say: make your home here.',
        'It is the only force capable of turning strangers into family and pain into shared sacrament.',
      ],
      sentiment: 'RADICAL SURRENDER',
    },
    rightPole: {
      name: 'Surgical Severance',
      archetype: 'The Cold Sentinel',
      color: '#a078ff', // Deep Amethyst
      axiom: 'When betrayal strikes, anger is the immune response of the dignity.',
      passage: [
        'Cut away the rot before it reaches the bone.',
        'Hatred is the boundary line drawn in granite when kindness was answered with cruelty.',
        'Do not apologize for the walls that keep the predators from drinking at your spring.',
      ],
      sentiment: 'SELF-PRESERVING SEVERANCE',
    },
    synthesis:
      'Both love and hatred are forms of profound attention. The true opposite of both is not anger, but indifferent oblivion.',
  },
  {
    id: 'creation-vs-destruction',
    title: 'Creation vs. Destruction',
    leftPole: {
      name: 'Architectural Genesis',
      archetype: 'The Builder of Towers',
      color: '#4cd7f6',
      axiom: 'Out of formless dust, we coax intention into structure.',
      passage: [
        'Lay brick upon brick against the pull of gravity.',
        'Line by line, sentence by sentence, assemble a coherent world out of nothingness.',
        'Creation is humanity’s solitary rebellion against cosmic indifference.',
      ],
      sentiment: 'REBELLION AGAINST NOTHINGNESS',
    },
    rightPole: {
      name: 'Entropic Cleansing',
      archetype: 'The Scythe of Winter',
      color: '#ffb4ab',
      axiom: 'The forest cannot grow until the dead wood is returned to ash.',
      passage: [
        'Clear the obsolete monuments that suffocate the soil.',
        'Destruction is not tragedy; it is the necessary breath of the universe resetting the board.',
        'Blessed is the fire that consumes the hollow temples so real life may take root again.',
      ],
      sentiment: 'CLEARING THE SEEDBED',
    },
    synthesis:
      'Creation and destruction are the diastole and systole of cosmic rhythm; one cannot exist without the other.',
  },
];

/* ─────────────────────────────────────────────────────────────
 * 3. FRAGMENTS — Aphorisms and Philosophical Observations
 * ───────────────────────────────────────────────────────────── */
export const ARCHIVE_FRAGMENTS: Fragment[] = [
  {
    id: 'frag-01',
    number: '01',
    category: 'philosophy',
    categoryLabel: 'Axiom of Measure',
    statement:
      'We measure what we fear we cannot control, and we write poetry about what we know will never obey us.',
    context: 'On the dual motivations behind engineering and art.',
  },
  {
    id: 'frag-02',
    number: '02',
    category: 'darkness',
    categoryLabel: 'The Quiet Machine',
    statement:
      'The quietest servers in the datacenter are always the ones carrying the deepest sorrow: unsent letters, expired accounts, and queries about loneliness at 3:00 AM.',
    context: 'Observation on modern human digital telemetry.',
  },
  {
    id: 'frag-03',
    number: '03',
    category: 'identity',
    categoryLabel: 'The Persona Mask',
    statement:
      'You are never more lonely than when being celebrated for a personality you engineered solely to be palatable to strangers.',
    context: 'On the tax of social conformity.',
  },
  {
    id: 'frag-04',
    number: '04',
    category: 'duality',
    categoryLabel: 'The Twin Clocks',
    statement:
      'There are two clocks running in every room: the quartz oscillator tracking seconds for the calendar, and the internal pendulum that measures how long a look lasted.',
    context: 'Subjective relativity of emotional moments.',
  },
  {
    id: 'frag-05',
    number: '05',
    category: 'contradiction',
    categoryLabel: 'The Fortified Heart',
    statement:
      'The wall that is thick enough to keep out every enemy is also thick enough to ensure you starve to death alone inside the citadel.',
    context: 'The tragic paradox of hyper-defensive psychology.',
  },
  {
    id: 'frag-06',
    number: '06',
    category: 'love',
    categoryLabel: 'The Unmarked Grave',
    statement:
      'Unexpressed love does not disappear; it turns into a subtle, permanent gravity that bends every sentence you speak for the rest of your life.',
    context: 'On the conservation of emotional mass.',
  },
  {
    id: 'frag-07',
    number: '07',
    category: 'existence',
    categoryLabel: 'The Ledger of Dust',
    statement:
      'The universe will not check whether you completed your sprint board. It will only ask if you were ever truly awake while the lights were on.',
    context: 'Perspectives on career obsession vs conscious vitality.',
  },
  {
    id: 'frag-08',
    number: '08',
    category: 'hatred',
    categoryLabel: 'The Furnace Tax',
    statement:
      'Holding onto hatred is like burning your own furniture to keep a stranger warm in another city.',
    context: 'On the hidden resource cost of grudge maintenance.',
  },
];

/* ─────────────────────────────────────────────────────────────
 * 4. THE MANUSCRIPT — Long-form Immersive Reading
 * ───────────────────────────────────────────────────────────── */
export const ARCHIVE_MANUSCRIPTS: Manuscript[] = [
  {
    id: 'treatise-on-silence-of-machines',
    title: 'Treatise on the Silence of Machines',
    subtitle: 'Notes on the border between deterministic logic and the human shadow',
    category: 'philosophy',
    categoryLabel: 'Philosophy & Technology',
    estimatedReadTime: '4 min read',
    epigraph: {
      quote: 'The machine is innocent. It only does what it was told. The horror belongs entirely to the programmer.',
      author: 'Reflections in the server corridor',
    },
    sections: [
      {
        heading: 'I. The Seduction of Clean Compiles',
        paragraphs: [
          'In code, there is a narcotic cleanliness. When a function fails, the stack trace delivers the exact line, column, and exception signature. There is no ambiguous sorrow; there is no unspoken resentment buried beneath three months of polite conversation. Either the syntax holds, or it breaks.',
          'For those of us drawn to engineering, this predictability feels like salvation. We are people who have bruised ourselves against the chaotic, untypeable surfaces of human intimacy, and we retreat into silicon because compilers do not hold grudges.',
        ],
      },
      {
        heading: 'II. The Unparsed Remainder',
        paragraphs: [
          'Yet the deeper one walks into distributed systems, the clearer the illusion becomes. Behind every high-throughput API gateway, behind every deterministic database transaction, sits an exhausted human operator drinking cold coffee at dawn, wondering if the work was worth the years.',
          'No mathematical model can capture the sudden tremor in a mother’s voice, the heavy stillness of a home after someone leaves, or the quiet courage it takes to look at your own reflection and admit you are not the hero of the story. These things cannot be cast to floating point numbers without discarding everything that matters.',
        ],
      },
      {
        heading: 'III. Standing Between the Two Fires',
        paragraphs: [
          'We do not have to choose between the cold precision of the tool and the wild mystery of the human heart. NEXUS is not a monument to technology alone; it is an altar built at the intersection.',
          'Let the servers run fast, let the algorithms converge, let the architecture scale without fault. But keep the lantern burning in the window for the wanderer who still walks in the dark. Because at the end of all computational iterations, the only metric that will ever matter is whether we learned how to love without calculating the cost.',
        ],
      },
    ],
    coda: 'Written during the quiet transition from night into morning, between the terminal prompt and the waking world.',
  },
  {
    id: 'the-architecture-of-human-ruin',
    title: 'The Architecture of Human Ruin',
    subtitle: 'Why the strongest structures collapse from the inside',
    category: 'existence',
    categoryLabel: 'Psychological Architecture',
    estimatedReadTime: '3 min read',
    epigraph: {
      quote: 'Castles rarely fall to catapults; they fall when the gatekeeper falls asleep from loneliness.',
      author: 'Aphorisms on defense',
    },
    sections: [
      {
        heading: 'I. The Fortress Fallacy',
        paragraphs: [
          'When an engineer designs for fault tolerance, the first instinct is redundancy: duplicate the databases, multiply the power supplies, place walls behind walls. We assume the enemy is outside the perimeter.',
          'In human lives, this translates into emotional cynicism. We build unscalable walls around our vulnerabilities. We pride ourselves on needing no one, on answering no call that smells of emotional dependence.',
        ],
      },
      {
        heading: 'II. The Starvation Inside',
        paragraphs: [
          'What we forget is that a closed loop is a thermodynamic tomb. Without fresh energy from the outside, any isolated system marches inexorably toward entropy. The cynicism that protects you from heartbreak also prevents you from ever being fed.',
          'True resilience is not invulnerability; true resilience is the capacity to be shattered and to have the humility to gather the pieces in the presence of someone who will not laugh at your scars.',
        ],
      },
    ],
    coda: 'A reminder that the only castle worth defending is one with an open drawbridge.',
  },
];

/* ─────────────────────────────────────────────────────────────
 * 5. THE UNWRITTEN — Hidden Easter Egg Passages
 * ───────────────────────────────────────────────────────────── */
export const UNWRITTEN_PASSAGES: UnwrittenPassage[] = [
  {
    id: 'passage-void-01',
    coordinates: 'DEPTH 48.02 // STRATUM OBSIDIAN',
    revelationThreshold: 25,
    ambientNote: 'Illuminated by cursor proximity',
    lines: [
      'You are looking for a secret in a world that cannot keep one.',
      'The real secret is that none of this was ever about the technology.',
      'The code was just a language I learned so I would not have to scream into the empty sky.',
    ],
  },
  {
    id: 'passage-void-02',
    coordinates: 'DEPTH 74.19 // ZERO FREQUENCY',
    revelationThreshold: 50,
    ambientNote: 'Core unwritten inscription',
    lines: [
      'If you found this quiet corner, it means you also wander when others sleep.',
      'Do not be afraid of the darkness within you; it is merely the blank canvas upon which your tomorrow is waiting to be drawn.',
      'Build your systems with cold steel, but guard your gentleness like holy water.',
    ],
  },
  {
    id: 'passage-void-03',
    coordinates: 'DEPTH 99.88 // BEYOND TELEMETRY',
    revelationThreshold: 80,
    ambientNote: 'Final transmission',
    lines: [
      'Between logic and darkness, you are the observer.',
      'Every line you read here is an invitation to close your screen,',
      'step outside into the cool night air,',
      'and feel the breath in your lungs.',
    ],
  },
];
