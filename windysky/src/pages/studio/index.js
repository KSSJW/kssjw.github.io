import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

// 卡片数据
const DataMinecraftJavaEdition = [
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/glowing-minecart@main/Big.png',
    name: 'Glowing Minecart',
    description: 'Minecart lighting based on the original Minecraft.',
    link: 'https://github.com/KSSJW/glowing-minecart'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/kinetic-minecart@main/images/Big.png',
    name: 'Kinetic Minecart',
    description: 'Impact damage from high-speed minecarts!',
    link: 'https://github.com/KSSJW/kinetic-minecart'
  },
  {
    img: 'https://avatars.githubusercontent.com/u/93428079',
    name: '(Archived) Leaves Nightly CI',
    description: 'An unofficial, radical build project that builds the latest changes from upstream.',
    link: 'https://github.com/KSSJW/leaves-nightly-ci'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/lucid-sky@main/pack.png',
    name: 'Lucid Sky',
    description: 'Sky and weather modified for realism based on the original version.',
    link: 'https://github.com/KSSJW/lucid-sky'
  },
  {
    img: 'https://cdn.modrinth.com/data/mwpGizag/7c5c80bcd330a23ef2775f1c80f5b1a626a128e0_96.webp',
    name: 'Minecart Braking',
    description: 'Added a braking function to the minecart.',
    link: 'https://github.com/KSSJW/minecart-braking'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/minecart-hud@main/images/Big.png',
    name: 'Minecart HUD',
    description: 'Add a head-up display to the minecart.',
    link: 'https://github.com/KSSJW/minecart-hud'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/minecart-trains-fork@main/images/Particle.png',
    name: 'Minecart Trains Fork',
    description: 'Add connectivity features for the minecart based on the original content.',
    link: 'https://github.com/KSSJW/minecart-trains-fork'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/railway-switch-controller@dev/images/Big.png',
    name: 'Railway Switch Controller',
    description: 'You can see and control the railway switches ahead!',
    link: 'https://github.com/KSSJW/railway-switch-controller'
  },
];

// 应用
const DataApplications = [
  {
    img: 'https://cdn.jsdelivr.net/gh/KSSJW/lucky-artwork@main/LuckyArtwork.AppDir/usr/share/icons/hicolor/256x256/apps/lucky-artwork.png',
    name: 'Lucky Artwork',
    description: 'A Flutter framework project that uses an API to get a random illustration.',
    link: 'https://github.com/KSSJW/lucky-artwork'
  },
  {
    img: 'https://avatars.githubusercontent.com/u/14101776',
    name: 'Relaxing Collection',
    description: 'A collection of relaxing games written using the Flutter framework.',
    link: 'https://github.com/KSSJW/relaxing-collection'
  },
]

// 卡片组件
function Card({ img, name, description, link }) {
  return (
    <Link to={link} className={styles.card}>
      <img src={img} alt={name} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </Link>
  );
}

// 页面组件
export default function CardsPage() {
  return (
    <Layout title="Studio" description="Studio Page">
        <main className={styles.container}>
            <h2>Minecraft Java Edition</h2>
            <div className={styles.cardGrid}>
                {DataMinecraftJavaEdition.map(
                  (card, index) => (
                    <Card key={index} {...card} />
                  )
                )}
            </div>
            <br></br>
            <h2>Applications</h2>
            <div className={styles.cardGrid}>
                {DataApplications.map(
                  (card, index) => (
                    <Card key={index} {...card} />
                  )
                )}
            </div>
        </main>
    </Layout>
  );
}