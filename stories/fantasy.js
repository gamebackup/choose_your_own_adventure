export const html = `
  <!-- Fantasy story: The Eldritch Valley -->
  <input type="radio" name="fantasy_cyoa" id="fantasy_s0" checked>
  <input type="radio" name="fantasy_cyoa" id="fantasy_s1_forest">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_draw">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_ignore">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_talk_jester">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_burn">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_walk">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_lights">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_hut">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_wade">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_riddle_right">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_riddle_wrong">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_crown">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_crystal">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_explore_castle">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_bandit_fight">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_surrender">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_trick_bandits">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_willowisp">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s1_mountain">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_mallet">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_sword">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_search_camp">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_smash">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_talk">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_fight">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_flee">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_secret_pass">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_ignore_map">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_sneak">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_bonk">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_befriend">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_map_treasure">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_map_trap">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_griffon_nest">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s1_cavern">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_cave_river">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s2_cave_crystals">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_underground_lake">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s3_crystal_mine">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_lake_spirit">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_lake_dive">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_mine_golem">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s4_mine_steal">
  <input type="radio" name="fantasy_cyoa" id="fantasy_s5_true_ending">

  <div class="fantasy-game-container fantasy-env-forest">
    <!-- START SCENE -->
    <div id="fantasy_scene0" class="fantasy-scene">
      <pre class="fantasy-pre">
        .    *    .
    .       |       .
        .   /|\\   .
    .     /  |  \\     .
        /    |    \\
    .  /     |     \\  .
      /      |      \\
     /       |       \\
    /   __   |   __   \\
   /   /  \\  |  /  \\   \\
  /   /    \\ | /    \\   \\
 /___/______\\|/______\\___\\
     |       |       |
     |       |       |
     |_______|_______|
      </pre>
      <div class="fantasy-story-text">
        You stand at the crossroads of the Eldritch Valley, where three ancient paths diverge under a bruised purple sky. To the west, the <strong>Whispering Woods</strong> pulse with fey magic and the scent of ozone. To the east, the jagged peaks of <strong>Mount Dread</strong> claw at heavy gray clouds. Before you, a <strong>Dark Cavern</strong> yawns open like a sleeping beast's mouth, exhaling warm, mineral-scented air. Your destiny beckons.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s1_forest" class="fantasy-label">West: Enter the Whispering Woods</label>
        <label for="fantasy_s1_mountain" class="fantasy-label">East: Climb Mount Dread</label>
        <label for="fantasy_s1_cavern" class="fantasy-label">Down: Descend into the Dark Cavern</label>
      </div>
    </div>

    <!-- FOREST BRANCH -->
    <div id="fantasy_scene1_forest" class="fantasy-scene">
      <pre class="fantasy-pre">
      ) \\     ( /
     / (       ) \\
    ( * )     ( * )
     | |       | |
     | |       | |
    /   \\     /   \\
   /     \\   /     \\
  /       \\_/       \\
 /                   \\
      </pre>
      <div class="fantasy-story-text">
        The trees close in, their bark etched with faintly glowing runes. In a small moonlit clearing, a spectral jester in a patched motley hat sits cross-legged on a mossy stump. He says nothing, but his long fingers expertly shuffle a deck of cards that shimmer with inner light. He fans them out with a knowing grin, inviting you to choose. Something about his silent gaze suggests he knows more than he lets on.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s2_draw" class="fantasy-label">Draw a card from the glowing deck</label>
        <label for="fantasy_s2_talk_jester" class="fantasy-label">Ask the jester who he is</label>
        <label for="fantasy_s2_ignore" class="fantasy-label">Ignore him and walk deeper into the woods</label>
      </div>
    </div>

    <div id="fantasy_scene2_draw" class="fantasy-scene">
      <pre class="fantasy-pre">
   +---------+
   | \\     / |
   |  \\   /  |
   |   \\ /   |
   |    X    |
   |   / \\   |
   |  /   \\  |
   | /     \\ |
   +---------+
   |  FLAME  |
   +---------+
      </pre>
      <div class="fantasy-story-text">
        You pull a card. It's the <strong>Joker of Flames</strong>! The card sears itself onto the back of your hand in a flash of heat, leaving a glowing mark. You feel raw fire magic coursing through your veins. Further down the path, you encounter an impassable wall of thorny black vines, pulsing with malevolent life, guarding a crystalline castle beyond.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_burn" class="fantasy-label">Unleash fire magic: Burn the thorn wall down</label>
        <label for="fantasy_s3_walk" class="fantasy-label">Conserve your magic: Find another way around</label>
      </div>
    </div>

    <div id="fantasy_scene2_talk_jester" class="fantasy-scene">
      <pre class="fantasy-pre">
      .-""""-.
     /   __   \\
    |   /  \\   |
    |   \\__/   |
     \\   __   /
      '-....-'
       /    \\
      /      \\
      </pre>
      <div class="fantasy-story-text">
        The jester's grin widens. He speaks in a voice like wind chimes: <em>"I am the keeper of riddles, wanderer. Answer true and the forest shall open its heart to you. Answer false..."</em> He trails off, tapping his chin. <em>"What has roots that nobody sees, is taller than trees, up, up it goes, and yet never grows?"</em>
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_riddle_right" class="fantasy-label">A mountain</label>
        <label for="fantasy_s3_riddle_wrong" class="fantasy-label">The wind</label>
      </div>
    </div>

    <div id="fantasy_scene2_ignore" class="fantasy-scene">
      <pre class="fantasy-pre">
     .~~~.
    /     \\    ~~~~
   |  @ @  |  ~~~~~~
    \\  ~  /  ~~~~ ~~~
     '._.'   ~~ ~~~~
       |    ~~~~ ~~
     ~~|~~ ~~~~ ~~~~
    ~~~~|~~~~~~~~~~~
      </pre>
      <div class="fantasy-story-text">
        You brush past the jester. He sighs dramatically, and with a snap of his fingers, the forest around you warps into a dark, bubbling swamp. Bioluminescent mushrooms cast eerie pools of light. In the distance, a crooked witch's hut leans precariously over the muck, while ghostly willow-o'-the-wisps dance over the water, beckoning you toward deeper marsh.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_hut" class="fantasy-label">Approach the witch's hut</label>
        <label for="fantasy_s3_wade" class="fantasy-label">Wade through the swamp muck</label>
        <label for="fantasy_s3_lights" class="fantasy-label">Follow the willow-o'-the-wisps</label>
      </div>
    </div>

    <!-- BURN THORNS -->
    <div id="fantasy_scene3_burn" class="fantasy-scene">
      <pre class="fantasy-pre">
      (  .  )
       ) . (
     (  (  )  )
      )  .  (
        \\|/
     --- * ---
        /|\\
       / | \\
      </pre>
      <div class="fantasy-story-text">
        With a flick of your wrist, the Joker's magic erupts! A torrent of flame engulfs the thorn wall, reducing it to ash in seconds. You step through into the glittering <strong>Crystal Castle</strong>. In the center of the grand hall, on a pedestal of frozen light, rests the legendary <strong>Crown of Glass</strong>. It hums with ancient, terrible power.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_crown" class="fantasy-label">Place the Crown of Glass upon your head</label>
        <label for="fantasy_s4_crystal" class="fantasy-label">Smash the crown to end its curse forever</label>
        <label for="fantasy_s4_explore_castle" class="fantasy-label">Explore the castle further before deciding</label>
      </div>
    </div>

    <!-- WALK AROUND -->
    <div id="fantasy_scene3_walk" class="fantasy-scene">
      <pre class="fantasy-pre">
       /\\    /\\
      /  \\  /  \\
     /    \\/    \\
    /     /\\     \\
   /     /  \\     \\
  /_____/    \\_____\\
      |        |
      |  BANDITS  |
      |___________|
      </pre>
      <div class="fantasy-story-text">
        You decide to save your magic and trek around the thorn wall via a narrow gorge. As you squeeze through, three heavily armed bandits drop from the rocks above, surrounding you. <em>"Your gold or your life, stranger! And we'd prefer the gold — it's less messy."</em>
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_bandit_fight" class="fantasy-label">Use the Joker of Flames: Fight them off</label>
        <label for="fantasy_s4_surrender" class="fantasy-label">Hand over your coin purse peacefully</label>
        <label for="fantasy_s4_trick_bandits" class="fantasy-label">Bluff: Claim you're a powerful wizard</label>
      </div>
    </div>

    <!-- FOLLOW WISPS -->
    <div id="fantasy_scene3_lights" class="fantasy-scene">
      <pre class="fantasy-pre">
      .  ~  .  ~  .
     ~   o   o   ~
    .  o  \\_/  o  .
     ~  o  |  o  ~
      .  ~  |  ~  .
         ~  |  ~
    ~~~~~~  |  ~~~~~~
    ~~~~~~~~~~~~~~~~~
      </pre>
      <div class="fantasy-story-text">
        The wisps lead you deeper into the marsh, their glow pulsing rhythmically. They circle around an ancient stone altar half-sunken in the bog. On the altar lies a pulsating green gem, radiating pure life energy. But the wisps grow agitated, swirling faster — this place is sacred, and you are an intruder.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_willowisp" class="fantasy-label">Take the glowing gem from the altar</label>
        <label for="fantasy_s3_wade" class="fantasy-label">Leave it be and wade back to safety</label>
      </div>
    </div>

    <!-- RIDDLES -->
    <div id="fantasy_scene3_riddle_right" class="fantasy-scene">
      <pre class="fantasy-pre">
      \\   /
       \\ /
        *
       / \\
      /   \\
     /     \\
    /       \\
      </pre>
      <div class="fantasy-story-text">
        <em>"Correct!"</em> the jester beams, clapping his hands. <em>"A mountain indeed! You have a sharp mind, traveler."</em> He reaches behind his ear and produces a tiny silver key that grows to full size in his palm. <em>"This unlocks the hidden grove. Go — and may the old magic guide you."</em> The trees part, revealing a sunlit path to a secret sanctuary. You have found the <strong>Grove of Eternal Spring</strong>, a paradise hidden from the world. You live out your days in peace and wonder.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene3_riddle_wrong" class="fantasy-scene">
      <pre class="fantasy-pre">
      .   .
     \\_____/
     /     \\
    /  X X  \\
    |   ^   |
    \\_______/
      </pre>
      <div class="fantasy-story-text">
        The jester's face falls. <em>"Oh, dear. Wrong answer."</em> He snaps his fingers once. The world spins, and you find yourself shrunk to the size of a beetle, trapped under a glass jar in the jester's collection. <em>"Don't worry,"</em> he whispers, peering down at you, <em>"I'll feed you crumbs."</em>
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- SWAMP HUT -->
    <div id="fantasy_scene3_hut" class="fantasy-scene">
      <pre class="fantasy-pre">
       @..@
      (----)
     ( >__< )
     ^^ ~~ ^^
      |    |
     /|    |\\
    / |____| \\
      </pre>
      <div class="fantasy-story-text">
        You push open the creaking door. The witch looks up from her cauldron, furious at the intrusion. <em>"No manners at all!"</em> she shrieks. Before you can apologize, her wand lashes out with a crackle of green energy. Your body shrinks, your skin turns warty, and the world grows enormous around you. You are now a swamp toad. Ribbit.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- WADE IN SWAMP -->
    <div id="fantasy_scene3_wade" class="fantasy-scene">
      <pre class="fantasy-pre">
    ~~~~~~~~~~~~~~~~
    ~~~~~~~ ~~~~~~~~
    ~~~~~  o  ~~~~~~
    ~~~~  \\_/  ~~~~~
    ~~~~~~ | ~~~~~~~
    ~~~~~~ | ~~~~~~~
    ~~~~~~~~~~~~~~~~
      </pre>
      <div class="fantasy-story-text">
        You step into the murky water. It's far deeper than it looked. Before you can react, massive reptilian forms surge from beneath the surface. The swamp crocodiles have lived here for centuries, and they are always hungry. The murky water churns red, then stills.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- CROWN ENDINGS -->
    <div id="fantasy_scene4_crown" class="fantasy-scene">
      <pre class="fantasy-pre">
       _/\\_
      /    \\
      \\    /
       \\  /
        \\/
        /\\
       /  \\
      /    \\
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE CRYSTAL MONARCH</strong><br><br>
        The moment the crown touches your brow, your skin hardens into living crystal. You gain infinite power over the valley — but you are forever fused to the throne, a beautiful, terrible statue-king, watching centuries pass in silence.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_crystal" class="fantasy-scene">
      <pre class="fantasy-pre">
       \\ | /
     --- * ---
       / | \\
      /  |  \\
         |
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: LIBERATOR OF THE VALLEY</strong><br><br>
        You raise the heavy mallet (or your fist) and shatter the crown! A massive shockwave of purified energy surges outward. The curse lifts, the sky clears, the jester bows to you from afar, and the valley blooms into spring. You return home a true hero.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_explore_castle" class="fantasy-scene">
      <pre class="fantasy-pre">
      /|   |\\
     / |   | \\
    /  |   |  \\
   /___|___|___\\
       |   |
       |   |
       |___|
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE HIDDEN ARCHIVE</strong><br><br>
        You explore deeper into the castle and discover an ancient library filled with crystallized books. Among them, a tome reveals the true history of the valley — and a spell to free the land without destroying the crown. You become the realm's wisest scholar-king, ruling with knowledge instead of power.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- BANDIT ENDINGS -->
    <div id="fantasy_scene4_bandit_fight" class="fantasy-scene">
      <pre class="fantasy-pre">
      (   )   (   )
     (  FIRE  )
      (   )   (   )
         \\   /
          \\ /
           *
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE FEARSOME PYROMANCER</strong><br><br>
        You unleash a roaring wave of flame! The bandits scream and scatter into the hills. Word spreads fast — nobody in the valley ever dares cross the wandering fire-wielder again. You walk the roads freely, respected and feared.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_surrender" class="fantasy-scene">
      <pre class="fantasy-pre">
      ._____.
      | EMPTY |
      '-----'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: PENNILESS BUT ALIVE</strong><br><br>
        You hand over your coin purse with a sigh. The bandits laugh and leave you in the dirt. You survive, but the long walk back to civilization with empty pockets teaches you a hard lesson about preparedness.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_trick_bandits" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___.
      | ? |
      '---'
       / \\
      /   \\
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE GREAT BLUFF</strong><br><br>
        You raise your marked hand and speak in a booming voice: <em>"I am the Flame-Keeper of the Jester's Court! Flee or be ash!"</em> The Joker's mark glows menacingly. The bandits' eyes widen — they drop their weapons and run. You didn't spend a single coin or spark. Sometimes a good bluff is the sharpest weapon.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- WILLOWISP ENDING -->
    <div id="fantasy_scene4_willowisp" class="fantasy-scene">
      <pre class="fantasy-pre">
      *  .  *  .  *
     .  \\ | /  .
      * - O - *
     .  / | \\  .
      *  .  *  .  *
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: KEEPER OF THE MARSH</strong><br><br>
        You grasp the glowing gem. The wisps swirl around you in a frenzy — then suddenly calm. The gem bonds to your spirit, and you become the new guardian of the marsh, protecting its ancient magic for all eternity, accompanied by your floating wisp companions.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- MOUNTAIN BRANCH -->
    <div id="fantasy_scene1_mountain" class="fantasy-scene">
      <pre class="fantasy-pre">
        /\\
       /  \\/\\
      /    \\ \\
     /      \\ \\
    /        \\ \\
   /__________\\ \\
   \\          /  \\
    \\        /    \\
     \\      /      \\
      \\    /        \\
      </pre>
      <div class="fantasy-story-text">
        The air thins as you ascend. You stumble upon the remains of a long-dead adventurer's camp. A rusted iron sword lies half-buried in the scree. Nearby, sitting inexplicably pristine on a flat rock, is a heavy <strong>red croquet mallet</strong> with a polished oak handle. A torn journal peeks out from under a rotted bedroll.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s2_mallet" class="fantasy-label">Take the red croquet mallet</label>
        <label for="fantasy_s2_sword" class="fantasy-label">Take the iron sword</label>
        <label for="fantasy_s2_search_camp" class="fantasy-label">Search the journal and bedroll</label>
      </div>
    </div>

    <!-- MALLET -->
    <div id="fantasy_scene2_mallet" class="fantasy-scene">
      <pre class="fantasy-pre">
       _____
      [_____]
        | |
        | |
        | |
        | |
       /   \\
      /     \\
      </pre>
      <div class="fantasy-story-text">
        You heft the mallet. It's surprisingly well-balanced and feels almost eager in your grip. As you continue upward, a massive <strong>Mountain Troll</strong> leaps from behind a boulder, blocking the narrow pass. Its stone-gray hide looks impenetrable, and its club is the size of a small tree.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_smash" class="fantasy-label">Swing the mallet with all your might</label>
        <label for="fantasy_s3_talk" class="fantasy-label">Raise a hand and try to negotiate</label>
      </div>
    </div>

    <!-- SWORD -->
    <div id="fantasy_scene2_sword" class="fantasy-scene">
      <pre class="fantasy-pre">
          /| ________________
    O|===|* >________________>
          \\|
           \\\\
            \\\\
      </pre>
      <div class="fantasy-story-text">
        You pull the rusty sword from the dirt. It feels flimsy, the blade pitted with age. Before you can test its edge, a massive <strong>Mountain Troll</strong> crashes down from the cliffs, roaring and blocking your path entirely.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_fight" class="fantasy-label">Stand your ground and fight the troll</label>
        <label for="fantasy_s3_flee" class="fantasy-label">Drop the sword and flee back down the trail</label>
      </div>
    </div>

    <!-- SEARCH CAMP -->
    <div id="fantasy_scene2_search_camp" class="fantasy-scene">
      <pre class="fantasy-pre">
      .-------.
      | JOURNAL |
      '-------'
       /     \\
      /       \\
     /  MAP    \\
    /___________\\
      </pre>
      <div class="fantasy-story-text">
        You flip through the journal. The last entry describes a <strong>secret mountain pass</strong> leading to an ancient griffon's nest, said to contain treasure beyond measure. Tucked in the back cover is a faded but legible map. The journal also warns of unstable rockfalls along the pass.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_secret_pass" class="fantasy-label">Follow the map to the secret pass</label>
        <label for="fantasy_s3_ignore_map" class="fantasy-label">Ignore it — maps from dead adventurers are bad omens</label>
      </div>
    </div>

    <!-- SMASH TROLL -->
    <div id="fantasy_scene3_smash" class="fantasy-scene">
      <pre class="fantasy-pre">
        O
       /|\\
       / \\
      /   \\
     /     \\
    /       \\
      </pre>
      <div class="fantasy-story-text">
        You swing with everything you have. <strong>CRACK!</strong> The mallet releases a burst of strange kinetic energy on impact. The troll goes flying over the cliff edge, howling all the way down. You press on and discover a cavern entrance. Inside, a <strong>massive dragon</strong> sleeps atop a glittering hoard of gold and jewels, its breath rising and falling in smoky puffs.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_sneak" class="fantasy-label">Set down the mallet and sneak past to steal gold</label>
        <label for="fantasy_s4_bonk" class="fantasy-label">Bonk the dragon on the snout with the mallet</label>
        <label for="fantasy_s4_befriend" class="fantasy-label">Try to befriend the sleeping dragon</label>
      </div>
    </div>

    <!-- TALK TROLL -->
    <div id="fantasy_scene3_talk" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___.
      |RIP|
      '---'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: DIPLOMACY FAILED</strong><br><br>
        You raise your hands peacefully. The troll, who skipped breakfast, sees not a diplomat but a convenient snack. It picks you up, sniffs you once, and swallows you whole. Negotiations were brief.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- FIGHT TROLL -->
    <div id="fantasy_scene3_fight" class="fantasy-scene">
      <pre class="fantasy-pre">
      ___
     /   \\
    |  X  |
     \\___/
      | |
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: SHATTERED STEEL</strong><br><br>
        You lunge and strike the troll's leg. The ancient sword snaps clean in half against its stone-like hide. The troll looks down, almost offended, then brings its club down with a thunderous crash. The stars go out.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- FLEE -->
    <div id="fantasy_scene3_flee" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___.
      |RUN|
      '---'
       / \\
      /   \\
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE COWARD'S TALE</strong><br><br>
        You drop the worthless sword and sprint back down the mountain, heart pounding. You survive, and eventually become a tavern keeper, entertaining patrons with wildly exaggerated stories of monsters you definitely, absolutely, heroically defeated.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- SECRET PASS -->
    <div id="fantasy_scene3_secret_pass" class="fantasy-scene">
      <pre class="fantasy-pre">
       /\\
      /  \\
     /    \\
    /  __  \\
   /  /  \\  \\
  /  /    \\  \\
 /__/______\\__\\
      </pre>
      <div class="fantasy-story-text">
        You follow the crumbling map through a narrow, wind-blasted defile. The pass opens onto a high ledge overlooking a magnificent valley. Before you lies a <strong>griffon's nest</strong>, empty — the great beast is out hunting. Golden artifacts glint among the twigs and bones.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_griffon_nest" class="fantasy-label">Quickly grab treasure from the nest</label>
        <label for="fantasy_s4_map_treasure" class="fantasy-label">The map also marks a hidden cave nearby — investigate</label>
      </div>
    </div>

    <!-- IGNORE MAP -->
    <div id="fantasy_scene3_ignore_map" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___.
      | NOPE |
      '---'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE PRUDENT CLIMBER</strong><br><br>
        You decide the map is cursed and the dead adventurer's fate is warning enough. You climb back down the mountain, sell the journal to a historian for a modest sum, and live a quiet, uneventful life. Safe, but utterly unremarkable.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- DRAGON ENDINGS -->
    <div id="fantasy_scene4_sneak" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___. .___. .___.
      |Au| |Ag| |Cu|
      '---' '---' '---'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE SILENT HOARDER</strong><br><br>
        You leave the mallet by the entrance and tiptoe through the cavern. You fill every pocket with gold coins and precious gems, then slip away as silently as a shadow. You retire wealthy beyond measure, though sometimes you dream of the red mallet you left behind.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_bonk" class="fantasy-scene">
      <pre class="fantasy-pre">
        \\|/
       - O -
        /|\\
       / | \\
      /  |  \\
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE LEGENDARY DRAGON-BONKER</strong><br><br>
        You leap from a stalactite and bring the mallet down squarely on the dragon's snout. The beast's eyes fly open — not in rage, but in utter, bewildered shock. Never in its 3,000 years has anything dared to <em>bonk</em> it. It lets out a yelp like a startled puppy and flees the cavern, crying. The entire hoard is yours.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_befriend" class="fantasy-scene">
      <pre class="fantasy-pre">
      .-""""-.
     /  _  _  \\
     |   __   |
     \\  '--'  /
      '-....-'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: DRAGONKIN</strong><br><br>
        You approach slowly, mallet lowered, and hum an old lullaby your grandmother taught you. The dragon stirs, fixes you with one enormous golden eye — and then rumbles with what sounds almost like a purr. You have made a friend for life. Together, you soar the skies of the Eldritch Valley, an unbreakable bond between human and dragon.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- MAP TREASURE / TRAP -->
    <div id="fantasy_scene4_map_treasure" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___.
      | X |
      '---'
       / \\
      /   \\
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE HIDDEN CAVE FORTUNE</strong><br><br>
        The map's second marking leads you to a hidden cave behind a waterfall. Inside, you find the original adventurer's stash — a chest of gold, preserved rations, and a perfectly forged steel longsword. With wealth and a proper weapon, you carve out a legendary career as a monster hunter.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_map_trap" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___. .___. .___.
      | B | | O | | M |
      '---' '---' '---'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: TRIGGERED</strong><br><br>
        The "hidden cave" was a trap all along. As you step onto the pressure plate, the entire ledge gives way. You tumble down the mountainside in a cascade of rocks and debris. The adventurer's journal was bait, and you took it. At least the view on the way down was spectacular.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- GRIFFON NEST -->
    <div id="fantasy_scene4_griffon_nest" class="fantasy-scene">
      <pre class="fantasy-pre">
      ^\\    /^
      ) \\  / (
      )  \\/  (
      )  /\\  (
      ) /  \\ (
      )/    \\)
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: FLIGHT OF THE GRIFFON</strong><br><br>
        You grab a gleaming golden torc from the nest just as a shadow falls over you. The griffon has returned. But instead of attacking, it cocks its head and lets out a curious chirp. The torc, it seems, was a gift meant for you — a bond between species. You mount the great beast and take to the skies, the valley sprawling beneath you in all its glory.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- CAVERN BRANCH -->
    <div id="fantasy_scene1_cavern" class="fantasy-scene">
      <pre class="fantasy-pre">
       _______
      /       \\
     /  .   .  \\
    /    ___    \\
    |   /   \\   |
    |   \\___/   |
    |           |
    \\___________/
         | |
         | |
         | |
      </pre>
      <div class="fantasy-story-text">
        You descend into the cool darkness. The air smells of damp stone and minerals. After a short crawl, the tunnel opens into a vast underground chamber. To your left, an <strong>underground river</strong> glows faintly with bioluminescent algae. To your right, a forest of <strong>glowing crystal formations</strong> casts prismatic light across the cavern walls.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s2_cave_river" class="fantasy-label">Follow the glowing underground river</label>
        <label for="fantasy_s2_cave_crystals" class="fantasy-label">Explore the crystal forest</label>
      </div>
    </div>

    <!-- CAVE RIVER -->
    <div id="fantasy_scene2_cave_river" class="fantasy-scene">
      <pre class="fantasy-pre">
    ~~~~ ~~~~ ~~~~ ~~~~
    ~~~~ ~~~~ ~~~~ ~~~~
    ~~~~ ~~~~ ~~~~ ~~~~
        ~~~~ ~~~~
            ~~~~
             ~~~~
      </pre>
      <div class="fantasy-story-text">
        The river's gentle current leads you to a vast <strong>underground lake</strong>. The ceiling above is encrusted with glowing crystals that mirror the stars. At the lake's center, a small island holds what appears to be a shrine. The water is crystal clear, revealing ancient carvings on the lakebed far below.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_underground_lake" class="fantasy-label">Swim to the island shrine</label>
        <label for="fantasy_s4_lake_dive" class="fantasy-label">Dive down to examine the carvings</label>
      </div>
    </div>

    <!-- CAVE CRYSTALS -->
    <div id="fantasy_scene2_cave_crystals" class="fantasy-scene">
      <pre class="fantasy-pre">
      /\\    /\\    /\\
     /  \\  /  \\  /  \\
    /    \\/    \\/    \\
    \\    /\\    /\\    /
     \\  /  \\  /  \\  /
      \\/    \\/    \\/
      </pre>
      <div class="fantasy-story-text">
        The crystal forest hums with ancient energy. At its heart, you find a <strong>crystal mine</strong> abandoned by dwarves centuries ago. Pickaxes still lean against the walls. A faint rhythmic thumping echoes from deeper within — something large, made of stone and crystal, still guards this place.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s3_crystal_mine" class="fantasy-label">Enter the mine cautiously</label>
        <label for="fantasy_s4_mine_steal" class="fantasy-label">Grab a few loose crystals and retreat</label>
      </div>
    </div>

    <!-- UNDERGROUND LAKE -->
    <div id="fantasy_scene3_underground_lake" class="fantasy-scene">
      <pre class="fantasy-pre">
      .  *  .  *  .
     *   o   o   *
    .  o  \\_/  o  .
     *  o  |  o  *
      .  *  |  *  .
         *  |  *
    ~~~~~~~ | ~~~~~~~
    ~~~~~~~~~~~~~~~~~
      </pre>
      <div class="fantasy-story-text">
        You swim across the cold, clear water and pull yourself onto the island. The shrine is dedicated to an ancient water spirit. A chalice filled with shimmering liquid sits at its base. A carved inscription reads: <em>"Drink and know the depths of all things."</em>
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_lake_spirit" class="fantasy-label">Drink from the chalice</label>
        <label for="fantasy_s4_lake_dive" class="fantasy-label">Leave it and dive to explore the lakebed</label>
      </div>
    </div>

    <!-- CRYSTAL MINE -->
    <div id="fantasy_scene3_crystal_mine" class="fantasy-scene">
      <pre class="fantasy-pre">
      /\\/\\/\\
     /      \\
    /   __   \\
    |  /  \\  |
    |  \\__/  |
    \\        /
     \\/\\/\\/\\
      </pre>
      <div class="fantasy-story-text">
        You step into the mine. The thumping grows louder. Around a corner, you come face-to-face with a <strong>Crystal Golem</strong> — a towering humanoid made of living gemstone. It regards you with faceted eyes that glow like embers. It does not attack, but it blocks the path to a vein of pure, priceless diamond.
      </div>
      <div class="fantasy-choices">
        <label for="fantasy_s4_mine_golem" class="fantasy-label">Attempt to communicate with the golem</label>
        <label for="fantasy_s4_mine_steal" class="fantasy-label">Dash past it and grab a diamond</label>
      </div>
    </div>

    <!-- LAKE ENDINGS -->
    <div id="fantasy_scene4_lake_spirit" class="fantasy-scene">
      <pre class="fantasy-pre">
      *   *   *
       \\  |  /
        \\ | /
          *
         /|\\
        / | \\
       /  |  \\
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE DEEP KNOWLEDGE</strong><br><br>
        You drink the shimmering liquid. In an instant, all the hidden truths of the world flood your mind — past, present, and future. You understand everything. You become the new water spirit of the underground lake, a font of wisdom for those brave enough to find you.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_lake_dive" class="fantasy-scene">
      <pre class="fantasy-pre">
      ~~~~ ~~~~ ~~~~
      ~~~~ .o. ~~~~
      ~~~~ /|\\ ~~~~
      ~~~~ / \\ ~~~~
      ~~~~~~~~~~~~~~
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE SUNKEN SECRET</strong><br><br>
        You dive deep. The carvings on the lakebed form a map — a map to a surface location where a true relic lies buried. You memorize it, surface gasping, and emerge from the cavern with purpose. The adventure is only beginning. This is the <strong>TRUE ENDING</strong> — the lost relic of Eldritch Valley awaits above, and you now know exactly where to dig.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s5_true_ending" class="fantasy-label">Claim your destiny</label></div>
    </div>

    <!-- MINE ENDINGS -->
    <div id="fantasy_scene4_mine_golem" class="fantasy-scene">
      <pre class="fantasy-pre">
      .-"""-.
     /  _  _  \\
     |   __   |
     \\  '--'  /
      '-...-'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: THE GOLEM'S FRIEND</strong><br><br>
        You speak softly to the golem, showing respect for its ancient duty. It rumbles in response and steps aside, allowing you to take a single perfect diamond. More importantly, it gifts you a shard of its own crystal heart — a charm of protection that will guard you for life.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <div id="fantasy_scene4_mine_steal" class="fantasy-scene">
      <pre class="fantasy-pre">
      .___.
      |CRASH|
      '---'
      </pre>
      <div class="fantasy-story-text">
        <strong>ENDING: CRYSTAL CRUSH</strong><br><br>
        You dart past the golem and snatch a diamond. Bad move. The golem's fist comes down like a hammer of judgment. The mine collapses around you, and you become a permanent part of the underground — a cautionary tale for future treasure hunters.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Restart Adventure</label></div>
    </div>

    <!-- TRUE ENDING -->
    <div id="fantasy_scene5_true_ending" class="fantasy-scene">
      <pre class="fantasy-pre">
         *
        /|\\
       / | \\
      /  |  \\
     /   |   \\
    /    |    \\
   /     |     \\
  /______|______\\
     |   |   |
     |   |   |
     |___|___|
      \\     /
       \\   /
        \\ /
         *
      </pre>
      <div class="fantasy-story-text">
        <strong>TRUE ENDING: THE LOST RELIC</strong><br><br>
        Armed with the underwater map, you journey to a forgotten corner of the Eldritch Valley. There, beneath an ancient oak split by lightning, you dig. Your shovel strikes something solid — a chest of weathered oak, bound in iron. Inside lies the <strong>Lost Relic of Eldritch</strong>: a crystal orb that hums with the combined magic of forest, mountain, and cavern. You hold the heart of the valley in your hands. The land recognizes you as its true guardian. Every creature, every spirit, every stone knows your name. You have not just survived the adventure — you have <em>won</em> it.
      </div>
      <div class="fantasy-choices"><label for="fantasy_s0" class="fantasy-label">Play Again: A New Destiny Awaits</label></div>
    </div>
  </div>
  <a class="back-to-hub" onclick="window.showHub?.()">← Back to Hub</a>
`;

export const css = `
  /* Fantasy story scoped styles */
  .fantasy-game-container {
    max-width: 720px;
    margin: 0 auto;
    border: 2px solid #33ff33;
    padding: 28px 22px;
    min-height: 82vh;
    box-shadow: 0 0 20px rgba(51,255,51,0.25);
    background: radial-gradient(ellipse at center, rgba(10,28,10,0.5) 0%, rgba(2,2,2,0.95) 70%);
    transition: box-shadow 0.6s ease;
  }
  .fantasy-env-forest { box-shadow: 0 0 20px rgba(51,255,51,0.25); border-color: #33ff33; }
  .fantasy-env-mountain { box-shadow: 0 0 20px rgba(150,200,255,0.2); border-color: #5599cc; color: #c8ddf8; }
  .fantasy-env-cavern { box-shadow: 0 0 20px rgba(255,170,51,0.2); border-color: #cc8833; color: #f0c878; }
  .fantasy-env-danger { box-shadow: 0 0 20px rgba(255,68,51,0.3); border-color: #cc3322; color: #ff7766; }
  .fantasy-env-magic { box-shadow: 0 0 20px rgba(180,130,255,0.25); border-color: #9966dd; color: #c8a8f8; }

  .fantasy-pre {
    font-size: 13px;
    white-space: pre;
    text-align: center;
    margin-bottom: 24px;
    text-shadow: 0 0 6px currentColor;
    line-height: 1.25;
    overflow-x: auto;
    animation: fantasyFlickerIn 1.2s ease-out;
  }
  @keyframes fantasyFlickerIn {
    0% { opacity:0; text-shadow:0 0 20px currentColor; }
    15%{opacity:0.4;} 25%{opacity:0.7;} 35%{opacity:0.5;}
    50%{opacity:0.9;} 100%{opacity:1; text-shadow:0 0 6px currentColor;}
  }
  .fantasy-story-text {
    font-size:1.15rem;
    margin-bottom:28px;
    text-align:center;
    padding:0 8px;
    animation: fantasyFadeIn 0.5s ease-out;
  }
  @keyframes fantasyFadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  .fantasy-choices { display:flex; flex-direction:column; gap:13px; align-items:center; }
  .fantasy-label {
    display:inline-block; border:1px solid currentColor; padding:13px 26px; cursor:pointer;
    text-transform:uppercase; letter-spacing:1.5px; transition:all 0.25s; width:82%;
    text-align:center; background:#000; font-weight:bold; font-size:0.9rem;
  }
  .fantasy-label:hover { background-color:currentColor; color:#000; box-shadow:0 0 18px currentColor; transform:scale(1.02); letter-spacing:2px; }
  .fantasy-label::before { content:'> '; opacity:0; transition:opacity 0.2s; }
  .fantasy-label:hover::before { opacity:1; animation: fantasyBlink 0.7s infinite; }
  @keyframes fantasyBlink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
  input.fantasy-radio { display: none; }
  .fantasy-scene { display: none; animation: fantasyFadeIn 0.5s ease-out; }

  /* FANTASY STATE MACHINE */
  #fantasy_s0:checked ~ .fantasy-game-container #fantasy_scene0,
  #fantasy_s1_forest:checked ~ .fantasy-game-container #fantasy_scene1_forest,
  #fantasy_s2_draw:checked ~ .fantasy-game-container #fantasy_scene2_draw,
  #fantasy_s2_ignore:checked ~ .fantasy-game-container #fantasy_scene2_ignore,
  #fantasy_s2_talk_jester:checked ~ .fantasy-game-container #fantasy_scene2_talk_jester,
  #fantasy_s3_burn:checked ~ .fantasy-game-container #fantasy_scene3_burn,
  #fantasy_s3_walk:checked ~ .fantasy-game-container #fantasy_scene3_walk,
  #fantasy_s3_lights:checked ~ .fantasy-game-container #fantasy_scene3_lights,
  #fantasy_s3_hut:checked ~ .fantasy-game-container #fantasy_scene3_hut,
  #fantasy_s3_wade:checked ~ .fantasy-game-container #fantasy_scene3_wade,
  #fantasy_s3_riddle_right:checked ~ .fantasy-game-container #fantasy_scene3_riddle_right,
  #fantasy_s3_riddle_wrong:checked ~ .fantasy-game-container #fantasy_scene3_riddle_wrong,
  #fantasy_s4_crown:checked ~ .fantasy-game-container #fantasy_scene4_crown,
  #fantasy_s4_crystal:checked ~ .fantasy-game-container #fantasy_scene4_crystal,
  #fantasy_s4_explore_castle:checked ~ .fantasy-game-container #fantasy_scene4_explore_castle,
  #fantasy_s4_bandit_fight:checked ~ .fantasy-game-container #fantasy_scene4_bandit_fight,
  #fantasy_s4_surrender:checked ~ .fantasy-game-container #fantasy_scene4_surrender,
  #fantasy_s4_trick_bandits:checked ~ .fantasy-game-container #fantasy_scene4_trick_bandits,
  #fantasy_s4_willowisp:checked ~ .fantasy-game-container #fantasy_scene4_willowisp,
  #fantasy_s1_mountain:checked ~ .fantasy-game-container #fantasy_scene1_mountain,
  #fantasy_s2_mallet:checked ~ .fantasy-game-container #fantasy_scene2_mallet,
  #fantasy_s2_sword:checked ~ .fantasy-game-container #fantasy_scene2_sword,
  #fantasy_s2_search_camp:checked ~ .fantasy-game-container #fantasy_scene2_search_camp,
  #fantasy_s3_smash:checked ~ .fantasy-game-container #fantasy_scene3_smash,
  #fantasy_s3_talk:checked ~ .fantasy-game-container #fantasy_scene3_talk,
  #fantasy_s3_fight:checked ~ .fantasy-game-container #fantasy_scene3_fight,
  #fantasy_s3_flee:checked ~ .fantasy-game-container #fantasy_scene3_flee,
  #fantasy_s3_secret_pass:checked ~ .fantasy-game-container #fantasy_scene3_secret_pass,
  #fantasy_s3_ignore_map:checked ~ .fantasy-game-container #fantasy_scene3_ignore_map,
  #fantasy_s4_sneak:checked ~ .fantasy-game-container #fantasy_scene4_sneak,
  #fantasy_s4_bonk:checked ~ .fantasy-game-container #fantasy_scene4_bonk,
  #fantasy_s4_befriend:checked ~ .fantasy-game-container #fantasy_scene4_befriend,
  #fantasy_s4_map_treasure:checked ~ .fantasy-game-container #fantasy_scene4_map_treasure,
  #fantasy_s4_map_trap:checked ~ .fantasy-game-container #fantasy_scene4_map_trap,
  #fantasy_s4_griffon_nest:checked ~ .fantasy-game-container #fantasy_scene4_griffon_nest,
  #fantasy_s1_cavern:checked ~ .fantasy-game-container #fantasy_scene1_cavern,
  #fantasy_s2_cave_river:checked ~ .fantasy-game-container #fantasy_scene2_cave_river,
  #fantasy_s2_cave_crystals:checked ~ .fantasy-game-container #fantasy_scene2_cave_crystals,
  #fantasy_s3_underground_lake:checked ~ .fantasy-game-container #fantasy_scene3_underground_lake,
  #fantasy_s3_crystal_mine:checked ~ .fantasy-game-container #fantasy_scene3_crystal_mine,
  #fantasy_s4_lake_spirit:checked ~ .fantasy-game-container #fantasy_scene4_lake_spirit,
  #fantasy_s4_lake_dive:checked ~ .fantasy-game-container #fantasy_scene4_lake_dive,
  #fantasy_s4_mine_golem:checked ~ .fantasy-game-container #fantasy_scene4_mine_golem,
  #fantasy_s4_mine_steal:checked ~ .fantasy-game-container #fantasy_scene4_mine_steal,
  #fantasy_s5_true_ending:checked ~ .fantasy-game-container #fantasy_scene5_true_ending {
    display: block;
  }
  @media (max-width: 500px) {
    .fantasy-game-container { padding: 16px 10px; min-height: 88vh; }
    .fantasy-pre { font-size: 10px; }
    .fantasy-story-text { font-size: 0.95rem; }
    .fantasy-label { width: 94%; padding: 11px 14px; font-size: 0.78rem; }
  }
`;
