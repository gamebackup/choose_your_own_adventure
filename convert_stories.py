#!/usr/bin/env python3
import re
import os

STORIES = [
    ("fantasy.html", "fantasy"),
    ("gothic.html", "gothic"),
    ("fallout-nv.html", "newvegas"),
    ("underwater.html", "underwater"),
    ("detective.html", "detective"),
    ("western.html", "western"),
    ("scifi.html", "scifi"),
    ("pirates.html", "pirates"),
    ("spy.html", "spy"),
    ("prehistoric.html", "prehistoric"),
]

def prefix_html(html_content, prefix):
    # Extract body
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    body = body_match.group(1) if body_match else html_content
    # Remove back-to-home links
    body = re.sub(r'<a[^>]*href=["\']index\.html["\'][^>]*>.*?</a>', '', body, flags=re.DOTALL | re.IGNORECASE)
    body = re.sub(r'<a[^>]*class=["\'][^"\']*back-link[^"\']*["\'][^>]*>.*?</a>', '', body, flags=re.DOTALL | re.IGNORECASE)
    # Extract CSS
    css_parts = []
    def extract_css(match):
        css_parts.append(match.group(1))
        return ''
    body = re.sub(r'<style[^>]*>(.*?)</style>', extract_css, body, flags=re.DOTALL | re.IGNORECASE)
    original_css = '\n'.join(css_parts)
    # Prefix IDs, for, name
    body = re.sub(r'id="([^"]+)"', lambda m: f'id="{prefix}_{m.group(1)}"', body)
    body = re.sub(r'for="([^"]+)"', lambda m: f'for="{prefix}_{m.group(1)}"', body)
    body = re.sub(r'name="([^"]+)"', lambda m: f'name="{prefix}_{m.group(1)}"', body)
    # Prefix class attributes
    def prefix_class_attr(match):
        classes = match.group(1).split()
        prefixed = [f"{prefix}_{c}" for c in classes]
        return f'class="{" ".join(prefixed)}"'
    body = re.sub(r'class="([^"]+)"', prefix_class_attr, body)
    # Prefix CSS selectors
    prefixed_css = re.sub(r'#([a-zA-Z_][a-zA-Z0-9_-]*)', lambda m: f'#{prefix}_{m.group(1)}', original_css)
    prefixed_css = re.sub(r'\.([a-zA-Z_][a-zA-Z0-9_-]*)', lambda m: f'.{prefix}_{m.group(1)}', prefixed_css)
    # Ensure radio hiding
    if 'input[type="radio"]' not in prefixed_css:
        prefixed_css += '\ninput[type="radio"] { display: none; }'
    return body, prefixed_css

def generate_index_hub():
    hub_html = '''
    <div id="hub" class="hub">
        <h1>CHOOSE YOUR ADVENTURE</h1>
        <p class="subtitle">Select a story to begin<br>Click "Back to Hub" inside any story to return</p>
        <div class="button-group">
'''
    display_map = {
        'newvegas': 'Nexus Station, New Vegas ~80',
        'fantasy': 'The Eldritch Valley ~18',
        'gothic': 'Castle Sanguine ~41',
        'spy': 'The Berlin Cipher ~76',
        'scifi': 'Space Station Omega-7 ~18',
        'pirates': 'Isla Calavera ~17',
        'western': 'Dust & Lead ~16',
        'detective': 'Neon Shadows ~14',
        'underwater': 'Depth Unknown ~14',
        'prehistoric': 'Flint and Ember ~12',
    }
    for filename, prefix in STORIES:
        display = display_map.get(prefix, filename.replace('.html', ''))
        hub_html += f'            <a class="game-btn {prefix}" onclick="showStory(\'{prefix}\')">{display}</a>\n'
    hub_html += '''
        </div>
    </div>
'''
    return hub_html

def generate_story_container(prefix, body_html, css_content):
    # Ensure the radios are siblings of the game container (they already are)
    return f'''
    <div id="story-{prefix}" class="story-content">
        <style>{css_content}</style>
        {body_html}
        <a class="back-to-hub" onclick="showHub()">← Back to Hub</a>
    </div>
'''

def main():
    stories_html = []
    for filename, prefix in STORIES:
        if not os.path.exists(filename):
            print(f"Warning: {filename} not found, skipping.")
            continue
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        body, css = prefix_html(content, prefix)
        stories_html.append(generate_story_container(prefix, body, css))
    # Global CSS with fallback colors and radio hiding
    global_css = '''
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background: #050510;
            font-family: 'Courier New', monospace;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            overflow-x: hidden;
            overflow-y: auto;
        }
        input[type="radio"] { display: none; }
        .star-layer { position: fixed; top: 0; left: 0; width: 1px; height: 1px; pointer-events: none; z-index: 0; }
        .star-layer1 { box-shadow: 10vw 15vh 2px #fff, 45vw 23vh 1px #fff, 70vw 10vh 3px #fff, 25vw 65vh 1px #fff, 60vw 75vh 2px #fff, 85vw 45vh 1px #fff, 15vw 85vh 3px #fff, 40vw 40vh 2px #fff, 90vw 80vh 1px #fff, 5vw 50vh 2px #fff, 55vw 8vh 1px #fff, 75vw 55vh 3px #fff, 33vw 33vh 1px #fff, 68vw 68vh 2px #fff, 82vw 20vh 1px #fff, 20vw 5vh 2px #fff, 95vw 60vh 1px #fff, 48vw 90vh 3px #fff, 12vw 72vh 1px #fff, 88vw 35vh 2px #fff; animation: twinkle1 3s infinite alternate; }
        .star-layer2 { box-shadow: 2vw 30vh 1px #fff, 38vw 12vh 2px #fff, 65vw 28vh 1px #fff, 80vw 5vh 3px #fff, 18vw 55vh 2px #fff, 52vw 80vh 1px #fff, 72vw 62vh 2px #fff, 8vw 40vh 1px #fff, 95vw 85vh 3px #fff, 30vw 75vh 1px #fff, 58vw 45vh 2px #fff, 78vw 18vh 1px #fff, 42vw 3vh 2px #fff, 62vw 90vh 1px #fff, 85vw 72vh 2px #fff, 10vw 20vh 3px #fff, 25vw 50vh 1px #fff, 70vw 38vh 2px #fff, 50vw 95vh 1px #fff, 92vw 15vh 2px #fff; animation: twinkle2 4s infinite alternate; }
        .star-layer3 { box-shadow: 5vw 8vh 2px #fff, 35vw 18vh 1px #fff, 60vw 5vh 2px #fff, 75vw 40vh 1px #fff, 15vw 45vh 3px #fff, 48vw 75vh 1px #fff, 68vw 58vh 2px #fff, 85vw 68vh 1px #fff, 22vw 80vh 2px #fff, 55vw 28vh 1px #fff, 80vw 85vh 3px #fff, 12vw 60vh 2px #fff, 32vw 95vh 1px #fff, 88vw 22vh 2px #fff, 95vw 50vh 1px #fff, 42vw 42vh 3px #fff, 72vw 15vh 1px #fff, 8vw 32vh 2px #fff, 28vw 68vh 1px #fff, 65vw 88vh 2px #fff; animation: twinkle3 5s infinite alternate; }
        @keyframes twinkle1 { 0% { opacity: 0.3; } 100% { opacity: 1; } }
        @keyframes twinkle2 { 0% { opacity: 0.5; } 100% { opacity: 0.9; } }
        @keyframes twinkle3 { 0% { opacity: 0.4; } 100% { opacity: 0.85; } }
        .hub { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
        h1 { color: #fff; font-size: 2.8rem; text-shadow: 0 0 20px rgba(255,255,255,0.4); letter-spacing: 3px; }
        .subtitle { color: #aaa; font-size: 1.3rem; letter-spacing: 2px; }
        .button-group { display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; }
        a.game-btn {
            text-decoration: none;
            border: 2px solid;
            padding: 1.2rem 2.8rem;
            font-size: 1.4rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
            background: rgba(0,0,0,0.5);
            transition: all 0.3s;
            display: inline-block;
            cursor: pointer;
        }
        a.game-btn:hover { transform: translateY(-3px); box-shadow: 0 0 30px currentColor; }
        a.game-btn:active { transform: scale(0.96); }
        a.fantasy { color: #33ff33; border-color: #33ff33; }
        a.scifi { color: #33eeff; border-color: #33eeff; }
        a.pirates { color: #ffb000; border-color: #ffb000; }
        a.western { color: #924A36; border-color: #924A36; }
        a.underwater { color: #11AAFF; border-color: #11AAFF; }
        a.detective { color: #ff44aa; border-color: #ff44aa; }
        a.prehistoric { color: #8F6946; border-color: #8F6946; }
        a.newvegas { color: #ffb000; border-color: #ffb000; }
        a.gothic { color: #cc2222; border-color: #cc2222; }
        a.spy { color: #c8a84b; border-color: #c8a84b; }
        @media (max-width: 500px) {
            h1 { font-size: 1.8rem; }
            .subtitle { font-size: 1rem; }
            a.game-btn { padding: 1rem 1.8rem; font-size: 1.1rem; }
        }
        .story-content { display: none; width: 100%; max-width: 800px; margin: 0 auto; position: relative; }
        .back-to-hub {
            position: fixed;
            top: 12px;
            left: 12px;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            font-family: monospace;
            border: 1px solid white;
            z-index: 1000;
            cursor: pointer;
        }
        .back-to-hub:hover { background: white; color: black; }
        /* Fallback to ensure story containers have visible text */
        .story-content {
            background: #0a0a1a;
            color: #33ff33;
        }
    '''
    hub_html = generate_index_hub()
    stories_containers = '\n'.join(stories_html)
    script = '''
    <script>
        function showStory(storyId) {
            var hub = document.getElementById('hub');
            if (hub) hub.style.display = 'none';
            var containers = document.querySelectorAll('.story-content');
            for (var i = 0; i < containers.length; i++) {
                containers[i].style.display = 'none';
            }
            var storyDiv = document.getElementById('story-' + storyId);
            if (storyDiv) storyDiv.style.display = 'block';
        }
        function showHub() {
            var hub = document.getElementById('hub');
            if (hub) hub.style.display = 'flex';
            var containers = document.querySelectorAll('.story-content');
            for (var i = 0; i < containers.length; i++) {
                containers[i].style.display = 'none';
            }
        }
    </script>
'''
    full_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choose Your Own Adventure – All Stories in One Page</title>
    <style>{global_css}</style>
</head>
<body>
    <div class="stars">
        <div class="star-layer star-layer1"></div>
        <div class="star-layer star-layer2"></div>
        <div class="star-layer star-layer3"></div>
    </div>
    {hub_html}
    {stories_containers}
    {script}
</body>
</html>'''
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(full_html)
    print("Successfully generated index.html with all stories embedded.")

if __name__ == '__main__':
    main()
