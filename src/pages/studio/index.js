import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

// 卡片数据
const DataMinecraftJavaEdition = [
  {
    img: '/img/Studio/GlowingMinecart.png',
    name: 'Glowing Minecart',
    description: 'Minecart lighting based on the original Minecraft.',
    link: 'https://github.com/KSSJW/glowing-minecart'
  },
  {
    img: '/img/Studio/KineticMinecart.png',
    name: 'Kinetic Minecart',
    description: 'Impact damage from high-speed minecarts!',
    link: 'https://github.com/KSSJW/kinetic-minecart'
  },
  {
    img: '/img/Studio/LeavesNightlyCI.png',
    name: 'Leaves Nightly CI',
    description: 'An unofficial, radical build project that builds the latest changes from upstream.',
    link: 'https://github.com/KSSJW/Leaves-Nightly-CI'
  },
  {
    img: '/img/Studio/MinecartHUD.png',
    name: 'Minecart HUD',
    description: 'Add a head-up display to the minecart.',
    link: 'https://github.com/KSSJW/minecart-hud'
  },
  {
    img: '/img/Studio/MinecartTrainsFork.png',
    name: 'Minecart Trains Fork',
    description: 'Add connectivity features for the minecart based on the original content.',
    link: 'https://github.com/KSSJW/minecart-trains-fork'
  },
  {
    img: '/img/Studio/RailwaySwitchController.png',
    name: 'Railway Switch Controller',
    description: 'You can see and control the railway switches ahead!',
    link: 'https://github.com/KSSJW/railway-switch-controller'
  },
];

// 应用
const DataApplications = [
  {
    img: '/img/Studio/LuckyArtwork.png',
    name: 'Lucky Artwork',
    description: 'A Flutter framework project that uses an API to get a random illustration.',
    link: 'https://github.com/KSSJW/lucky-artwork'
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