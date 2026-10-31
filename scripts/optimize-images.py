"""
Image optimization script for Art-Rock-Climber.github.io.
Resizes and converts resume_photo to WebP and optimized PNG (for hero and avatar).
Compresses favicons and og-image.
"""
from PIL import Image
import os
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTO_DIR = os.path.join(ROOT_DIR, "public", "favicon", "my_photo")
FAVICON_DIR = os.path.join(ROOT_DIR, "public", "favicon")
ASSETS_DIR = os.path.join(ROOT_DIR, "public", "assets")
SOURCE_ASSETS_DIR = os.path.join(ROOT_DIR, "src", "assets")

def optimize_photo():
    os.makedirs(SOURCE_ASSETS_DIR, exist_ok=True)
    orig_source = os.path.join(SOURCE_ASSETS_DIR, "resume_photo_original.png")
    legacy_backup = os.path.join(PHOTO_DIR, "resume_photo_original.png")
    current_photo = os.path.join(PHOTO_DIR, "resume_photo.png")

    if os.path.exists(legacy_backup):
        shutil.move(legacy_backup, orig_source)
        print(f"Moved original photo from public to {orig_source}")
    elif not os.path.exists(orig_source) and os.path.exists(current_photo):
        shutil.copy2(current_photo, orig_source)
        print(f"Preserved original source to {orig_source}")

    if not os.path.exists(orig_source):
        raise FileNotFoundError(f"Source photo not found at {orig_source}")

    img = Image.open(orig_source)
    print(f"Loaded source photo: {img.size} ({os.path.getsize(orig_source):,} bytes)")

    # 1. Hero 560x560 (Retina 2x for 280px display)
    hero_size = (560, 560)
    img_hero = img.resize(hero_size, Image.Resampling.LANCZOS)
    
    hero_webp_path = os.path.join(PHOTO_DIR, "resume_photo.webp")
    img_hero.save(hero_webp_path, "WEBP", quality=85, method=6)
    print(f"Generated hero WebP: {hero_webp_path} ({os.path.getsize(hero_webp_path):,} bytes)")
    
    hero_png_path = os.path.join(PHOTO_DIR, "resume_photo.png")
    img_hero.save(hero_png_path, "PNG", optimize=True)
    print(f"Generated hero PNG fallback: {hero_png_path} ({os.path.getsize(hero_png_path):,} bytes)")

    # 2. Avatar 80x80 (Retina 2x for 40px display)
    avatar_size = (80, 80)
    img_avatar = img.resize(avatar_size, Image.Resampling.LANCZOS)

    avatar_webp_path = os.path.join(PHOTO_DIR, "avatar.webp")
    img_avatar.save(avatar_webp_path, "WEBP", quality=85, method=6)
    print(f"Generated avatar WebP: {avatar_webp_path} ({os.path.getsize(avatar_webp_path):,} bytes)")

    avatar_png_path = os.path.join(PHOTO_DIR, "avatar.png")
    img_avatar.save(avatar_png_path, "PNG", optimize=True)
    print(f"Generated avatar PNG fallback: {avatar_png_path} ({os.path.getsize(avatar_png_path):,} bytes)")

def optimize_icons():
    targets = [
        "icon-512x512.png",
        "icon-192x192.png",
        "apple-touch-icon.png",
        "favicon-48x48.png",
        "favicon-32x32.png"
    ]
    for filename in targets:
        filepath = os.path.join(FAVICON_DIR, filename)
        if not os.path.exists(filepath):
            continue
        orig_size = os.path.getsize(filepath)
        img = Image.open(filepath)
        
        img_p = img.convert("P", palette=Image.Palette.ADAPTIVE, colors=256)
        temp_path = filepath + ".tmp"
        img_p.save(temp_path, "PNG", optimize=True)
        new_size = os.path.getsize(temp_path)
        
        if new_size < orig_size:
            os.replace(temp_path, filepath)
            print(f"Optimized {filename}: {orig_size:,} -> {new_size:,} bytes (-{round((orig_size - new_size) / orig_size * 100, 1)}%)")
        else:
            os.remove(temp_path)

def optimize_og_image():
    og_path = os.path.join(ASSETS_DIR, "og-image.png")
    if os.path.exists(og_path):
        orig_size = os.path.getsize(og_path)
        img = Image.open(og_path)
        temp_path = og_path + ".tmp"
        img.save(temp_path, "PNG", optimize=True)
        new_size = os.path.getsize(temp_path)
        if new_size < orig_size:
            os.replace(temp_path, og_path)
            print(f"Optimized og-image.png: {orig_size:,} -> {new_size:,} bytes (-{round((orig_size - new_size) / orig_size * 100, 1)}%)")
        else:
            os.remove(temp_path)

if __name__ == "__main__":
    print("--- Optimizing Photos ---")
    optimize_photo()
    print("\n--- Optimizing Icons ---")
    optimize_icons()
    print("\n--- Optimizing Open Graph Image ---")
    optimize_og_image()
    print("\nDone!")
