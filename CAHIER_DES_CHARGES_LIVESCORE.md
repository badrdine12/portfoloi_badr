# 📋 CAHIER DES CHARGES - LIVESCORE PLATFORM

## 🎯 1. PRÉSENTATION DU PROJET

### 1.1 Contexte
Développement d'une plateforme web et mobile permettant de consulter les résultats sportifs en temps réel, avec une interface moderne et intuitive.

### 1.2 Objectifs
- Fournir des résultats de matchs en temps réel
- Offrir des statistiques détaillées et classements
- Permettre aux utilisateurs de suivre leurs équipes favorites
- Créer une expérience utilisateur fluide et responsive

### 1.3 Cible
- Passionnés de sport (18-45 ans)
- Parieurs sportifs
- Journalistes et analystes sportifs
- Grand public

---

## 📊 2. PÉRIMÈTRE FONCTIONNEL

### 2.1 Fonctionnalités Principales

#### **Module 1 : Gestion des Matchs**
| ID | Fonctionnalité | Priorité | Complexité |
|----|---------------|----------|------------|
| F1.1 | Affichage des matchs en direct | ⭐⭐⭐ Haute | Moyenne |
| F1.2 | Affichage des matchs à venir | ⭐⭐⭐ Haute | Faible |
| F1.3 | Historique des résultats | ⭐⭐ Moyenne | Faible |
| F1.4 | Détails complets d'un match | ⭐⭐⭐ Haute | Moyenne |
| F1.5 | Timeline des événements (buts, cartons) | ⭐⭐ Moyenne | Moyenne |
| F1.6 | Statistiques du match | ⭐⭐ Moyenne | Moyenne |

#### **Module 2 : Championnats & Classements**
| ID | Fonctionnalité | Priorité | Complexité |
|----|---------------|----------|------------|
| F2.1 | Liste des championnats | ⭐⭐⭐ Haute | Faible |
| F2.2 | Tableau de classement | ⭐⭐⭐ Haute | Moyenne |
| F2.3 | Calendrier des matchs | ⭐⭐⭐ Haute | Moyenne |
| F2.4 | Meilleurs buteurs | ⭐⭐ Moyenne | Faible |
| F2.5 | Statistiques de saison | ⭐ Faible | Moyenne |

#### **Module 3 : Équipes & Joueurs**
| ID | Fonctionnalité | Priorité | Complexité |
|----|---------------|----------|------------|
| F3.1 | Profil d'équipe | ⭐⭐ Moyenne | Moyenne |
| F3.2 | Effectif complet | ⭐⭐ Moyenne | Faible |
| F3.3 | Profil joueur | ⭐ Faible | Moyenne |
| F3.4 | Historique confrontations | ⭐⭐ Moyenne | Moyenne |

#### **Module 4 : Utilisateurs**
| ID | Fonctionnalité | Priorité | Complexité |
|----|---------------|----------|------------|
| F4.1 | Inscription/Connexion | ⭐⭐⭐ Haute | Faible |
| F4.2 | Gestion profil | ⭐⭐ Moyenne | Faible |
| F4.3 | Équipes favorites | ⭐⭐⭐ Haute | Faible |
| F4.4 | Notifications push | ⭐⭐⭐ Haute | Haute |
| F4.5 | Préférences utilisateur | ⭐⭐ Moyenne | Faible |

#### **Module 5 : Recherche & Filtres**
| ID | Fonctionnalité | Priorité | Complexité |
|----|---------------|----------|------------|
| F5.1 | Recherche par équipe | ⭐⭐⭐ Haute | Faible |
| F5.2 | Recherche par compétition | ⭐⭐⭐ Haute | Faible |
| F5.3 | Filtres par sport | ⭐⭐⭐ Haute | Faible |
| F5.4 | Filtres par date | ⭐⭐ Moyenne | Faible |

#### **Module 6 : Administration**
| ID | Fonctionnalité | Priorité | Complexité |
|----|---------------|----------|------------|
| F6.1 | Dashboard admin | ⭐⭐⭐ Haute | Moyenne |
| F6.2 | Gestion des utilisateurs | ⭐⭐ Moyenne | Faible |
| F6.3 | Modération commentaires | ⭐ Faible | Faible |
| F6.4 | Statistiques d'utilisation | ⭐⭐ Moyenne | Moyenne |
| F6.5 | Configuration API externe | ⭐⭐⭐ Haute | Moyenne |

---

## 🎨 3. SPÉCIFICATIONS TECHNIQUES

### 3.1 Architecture

```markdown:CAHIER_DES_CHARGES_LIVESCORE.md
<code_block_to_apply_changes_from>
```
┌─────────────────────────────────────────────┐
│           FRONTEND (Client Side)            │
│  ┌────────────┐         ┌────────────┐     │
│  │  Web App   │         │ Mobile App │     │
│  │  React.js  │         │React Native│     │
│  └────────────┘         └────────────┘     │
└──────────────┬──────────────────────────────┘
               │
               ▼ (REST API / WebSocket)
┌─────────────────────────────────────────────┐
│            BACKEND (Server Side)            │
│  ┌────────────────────────────────────┐    │
│  │      Laravel 11 (PHP 8.2+)         │    │
│  │  - API RESTful                     │    │
│  │  - Authentication (Sanctum)        │    │
│  │  - WebSocket (Reverb/Pusher)       │    │
│  │  - Job Queues                      │    │
│  └────────────────────────────────────┘    │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│              BASE DE DONNÉES                │
│  ┌──────────┐    ┌──────────┐              │
│  │  MySQL   │    │  Redis   │              │
│  │(Principal)│    │ (Cache)  │              │
│  └──────────┘    └──────────┘              │
└─────────────────────────────────────────────┘
               ▲
               │
      ┌────────┴────────┐
      │   APIs Externes │
      │  (Football Data)│
      └─────────────────┘
```

### 3.2 Stack Technique

#### **Frontend Web**
```json
{
  "framework": "React 18 + TypeScript",
  "styling": "Tailwind CSS",
  "ui_library": "Shadcn/ui",
  "state_management": "React Query + Context API",
  "routing": "React Router v6",
  "forms": "React Hook Form + Zod",
  "realtime": "Socket.io-client",
  "charts": "Recharts",
  "animations": "Framer Motion"
}
```

#### **Mobile (Phase 2)**
```json
{
  "framework": "React Native",
  "platform": "Expo",
  "navigation": "React Navigation",
  "ui": "React Native Paper"
}
```

#### **Backend**
```json
{
  "framework": "Laravel 11",
  "php_version": "8.2+",
  "database": "MySQL 8.0+",
  "cache": "Redis",
  "queue": "Laravel Queue",
  "websocket": "Laravel Reverb",
  "auth": "Laravel Sanctum",
  "api_docs": "Swagger/OpenAPI"
}
```

### 3.3 Base de Données - Schéma Principal

```sql
-- SPORTS
CREATE TABLE sports (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE,
    icon VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- PAYS
CREATE TABLE countries (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(3),
    flag VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- COMPÉTITIONS
CREATE TABLE competitions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    sport_id BIGINT,
    country_id BIGINT,
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE,
    logo VARCHAR(255),
    season VARCHAR(20),
    type ENUM('league', 'cup', 'international'),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (sport_id) REFERENCES sports(id),
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

-- ÉQUIPES
CREATE TABLE teams (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE,
    short_name VARCHAR(50),
    logo VARCHAR(255),
    country_id BIGINT,
    stadium VARCHAR(200),
    founded_year INT,
    website VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

-- JOUEURS
CREATE TABLE players (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    team_id BIGINT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    photo VARCHAR(255),
    position VARCHAR(50),
    jersey_number INT,
    birth_date DATE,
    nationality VARCHAR(100),
    height INT,
    weight INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- MATCHS
CREATE TABLE matches (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    competition_id BIGINT,
    home_team_id BIGINT,
    away_team_id BIGINT,
    match_date DATETIME NOT NULL,
    venue VARCHAR(200),
    round VARCHAR(50),
    status ENUM('scheduled', 'live', 'finished', 'postponed', 'cancelled') DEFAULT 'scheduled',
    home_score INT DEFAULT 0,
    away_score INT DEFAULT 0,
    home_ht_score INT,
    away_ht_score INT,
    referee VARCHAR(100),
    attendance INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (competition_id) REFERENCES competitions(id),
    FOREIGN KEY (home_team_id) REFERENCES teams(id),
    FOREIGN KEY (away_team_id) REFERENCES teams(id),
    INDEX idx_status (status),
    INDEX idx_date (match_date)
);

-- ÉVÉNEMENTS DE MATCH
CREATE TABLE match_events (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    match_id BIGINT,
    team_id BIGINT,
    player_id BIGINT,
    type ENUM('goal', 'yellow_card', 'red_card', 'substitution', 'penalty', 'own_goal'),
    minute INT,
    extra_time INT,
    detail TEXT,
    created_at TIMESTAMP,
    FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id),
    FOREIGN KEY (player_id) REFERENCES players(id)
);

-- STATISTIQUES DE MATCH
CREATE TABLE match_statistics (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    match_id BIGINT,
    team_id BIGINT,
    possession INT,
    shots_total INT,
    shots_on_target INT,
    corners INT,
    fouls INT,
    offsides INT,
    yellow_cards INT,
    red_cards INT,
    saves INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- CLASSEMENTS
CREATE TABLE standings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    competition_id BIGINT,
    team_id BIGINT,
    position INT,
    points INT DEFAULT 0,
    played INT DEFAULT 0,
    wins INT DEFAULT 0,
    draws INT DEFAULT 0,
    losses INT DEFAULT 0,
    goals_for INT DEFAULT 0,
    goals_against INT DEFAULT 0,
    goal_difference INT DEFAULT 0,
    form VARCHAR(10),
    updated_at TIMESTAMP,
    FOREIGN KEY (competition_id) REFERENCES competitions(id),
    FOREIGN KEY (team_id) REFERENCES teams(id),
    UNIQUE KEY unique_standing (competition_id, team_id)
);

-- UTILISATEURS
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    language VARCHAR(5) DEFAULT 'fr',
    timezone VARCHAR(50) DEFAULT 'Africa/Casablanca',
    email_verified_at TIMESTAMP,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- ÉQUIPES FAVORITES
CREATE TABLE user_favorites (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    team_id BIGINT,
    created_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    UNIQUE KEY unique_favorite (user_id, team_id)
);

-- NOTIFICATIONS
CREATE TABLE notifications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    match_id BIGINT,
    type ENUM('match_start', 'goal', 'full_time', 'card'),
    title VARCHAR(255),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP,
    created_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE
);
```

---

## 🔌 4. APIS EXTERNES

### 4.1 Fournisseurs de Données

| API | Usage | Limite Gratuite | Coût |
|-----|-------|-----------------|------|
| **API-Football** | Résultats, stats, classements | 100 req/jour | $0 → $30/mois |
| **TheSportsDB** | Images, données de base | Illimitée | Gratuit |
| **LiveScore-API** | Scores en temps réel | 500 req/jour | $0 → $50/mois |

### 4.2 Endpoints API Backend

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/user/profile
PUT    /api/user/profile

GET    /api/sports
GET    /api/competitions
GET    /api/competitions/{id}/standings
GET    /api/competitions/{id}/matches

GET    /api/matches/live
GET    /api/matches/upcoming
GET    /api/matches/finished
GET    /api/matches/{id}
GET    /api/matches/{id}/events
GET    /api/matches/{id}/statistics

GET    /api/teams/{id}
GET    /api/teams/{id}/matches
GET    /api/teams/{id}/players

GET    /api/players/{id}

POST   /api/favorites
DELETE /api/favorites/{teamId}
GET    /api/favorites

GET    /api/notifications
PUT    /api/notifications/{id}/read
DELETE /api/notifications/{id}

GET    /api/search?q={query}
```

---

## 🎨 5. MAQUETTES & DESIGN

### 5.1 Palette de Couleurs

```css
:root {
  /* Primary */
  --primary: #10B981;        /* Vert - Live/Actif */
  --primary-dark: #059669;
  
  /* Secondary */
  --secondary: #6366F1;      /* Indigo - Accents */
  
  /* Neutral */
  --background: #0F172A;     /* Dark Blue */
  --surface: #1E293B;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  
  /* Status */
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

### 5.2 Pages Principales

#### **Page 1 : Accueil**
```
┌────────────────────────────────────────────────┐
│  [LOGO] LiveScore    En Direct | Ligues | ⚙️ 👤│
├────────────────────────────────────────────────┤
│  🔍 Rechercher équipe, compétition...          │
├────────────────────────────────────────────────┤
│  [ Football ▼ ]  [ Toutes Ligues ▼ ]          │
├────────────────────────────────────────────────┤
│                                                │
│  ⚡ EN DIRECT (3)                              │
│  ┌──────────────────────────────────────────┐ │
│  │ 🏆 Ligue 1                         45'+2' │ │
│  │ 🔴 Real Madrid        2                   │ │
│  │    Barcelona          1                   │ │
│  │ ⚽ Benzema 23' | ⚽ Lewandowski 15'       │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  📅 À VENIR AUJOURD'HUI (5)                   │
│  ┌──────────────────────────────────────────┐ │
│  │ 🏆 Premier League              20:00     │ │
│  │    Chelsea            -                   │ │
│  │    Manchester Utd     -                   │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ✅ TERMINÉS                                  │
│  ...                                           │
└────────────────────────────────────────────────┘
```

#### **Page 2 : Détails Match**
```
┌────────────────────────────────────────────────┐
│  ← Retour          🏆 Ligue 1        ⭐ 🔔     │
├────────────────────────────────────────────────┤
│           [LOGO]  Real Madrid                  │
│                      2                         │
│                                                │
│                   LIVE  45'+2'                 │
│                                                │
│                      1                         │
│           [LOGO]  Barcelona                    │
├────────────────────────────────────────────────┤
│  Résumé | Compositions | Statistiques | H2H   │
├────────────────────────────────────────────────┤
│                                                │
│  ⏱️ ÉVÉNEMENTS                                 │
│  45' 🟨 Frenkie De Jong (Barcelona)           │
│  38' ⚽ Karim Benzema (Real Madrid)           │
│  23' ⚽ Karim Benzema (Real Madrid)           │
│  15' ⚽ Robert Lewandowski (Barcelona)        │
│  1'  🏁 Coup d'envoi                          │
│                                                │
│  📊 STATISTIQUES                               │
│  Possession:        [====  ] 60% - 40%        │
│  Tirs:              12 - 8                     │
│  Tirs cadrés:       5 - 3                      │
│  Corners:           6 - 4                      │
│                                                │
└────────────────────────────────────────────────┘
```

#### **Page 3 : Classement**
```
┌────────────────────────────────────────────────┐
│  🏆 Ligue 1 - Saison 2024/25                  │
├────────────────────────────────────────────────┤
│  Classement | Calendrier | Buteurs            │
├────────────────────────────────────────────────┤
│ #  Équipe              J   V  N  D  Pts       │
│ 1  🟢 PSG              15  12 2  1  38  WWWDW │
│ 2  🟢 Monaco           15  10 3  2  33  DWWWW │
│ 3  🟢 Marseille        15  9  4  2  31  WWDWL │
│ 4  🟡 Lyon             15  8  5  2  29  DWWDW │
│ 5  🟡 Nice             15  8  3  4  27  LWWWL │
│ ...                                            │
│ 18 🔴 Le Havre         15  2  3  10 9   LLLDL │
└────────────────────────────────────────────────┘

Légende: 🟢 Champions League | 🟡 Europa | 🔴 Relégation
```

---

## ⏱️ 6. PLANNING PRÉVISIONNEL

### Phase 1 - MVP (4 semaines)

| Semaine | Tâches | Livrable |
|---------|--------|----------|
| **S1** | - Setup projet (React + Laravel)<br>- Configuration DB<br>- Intégration API Football | Environnement dev prêt |
| **S2** | - Page accueil<br>- Liste matchs live/upcoming<br>- Design système | UI de base fonctionnelle |
| **S3** | - Page détails match<br>- Événements timeline<br>- Statistiques | Détails match complets |
| **S4** | - Classements<br>- Recherche<br>- Tests + Debug | **MVP déployable** |

### Phase 2 - Fonctionnalités Avancées (3 semaines)

| Semaine | Tâches |
|---------|--------|
| **S5** | - Authentification<br>- Favoris<br>- Profil utilisateur |
| **S6** | - WebSocket temps réel<br>- Notifications push<br>- Cache Redis |
| **S7** | - Pages équipes/joueurs<br>- Historique H2H<br>- Optimisations |

### Phase 3 - Mobile & Avancé (2 semaines)

| Semaine | Tâches |
|---------|--------|
| **S8** | - App React Native<br>- Synchronisation |
| **S9** | - Dashboard admin<br>- Analytics<br>- **Lancement** 🚀 |

---

## 🧪 7. TESTS & QUALITÉ

### 7.1 Types de Tests

| Type | Outils | Couverture Cible |
|------|--------|------------------|
| **Unit Tests** | Jest + React Testing Library | 80% |
| **Integration Tests** | PHPUnit (Laravel) | 70% |
| **E2E Tests** | Cypress | Scénarios critiques |
| **Performance** | Lighthouse | Score > 90 |

### 7.2 Scénarios de Test Critiques

```
✅ T1: Affichage des matchs en direct
✅ T2: Mise à jour automatique du score (WebSocket)
✅ T3: Recherche d'une équipe
✅ T4: Ajout aux favoris
✅ T5: Réception notification (goal)
✅ T6: Consultation classement
✅ T7: Responsive mobile
✅ T8: Performance chargement < 2s
```

---

## 🚀 8. DÉPLOIEMENT

### 8.1 Environnements

```
Development  → localhost
Staging      → staging.livescore.com (Vercel/Railway)
Production   → www.livescore.com
```

### 8.2 Infrastructure

```
Frontend:  Vercel / Netlify
Backend:   Railway / DigitalOcean / AWS EC2
Database:  MySQL (Managed DB)
Cache:     Redis Cloud
CDN:       Cloudflare
Monitoring: Sentry + Google Analytics
```

---

## 💰 9. BUDGET ESTIMATIF

### 9.1 Développement

| Poste | Durée | Coût (si freelance) |
|-------|-------|---------------------|
| Développeur Full-Stack | 9 semaines | 0€ (vous) |
| Designer UI/UX (optionnel) | 1 semaine | 500€ |

### 9.2 Hébergement & Services (mensuel)

| Service | Coût |
|---------|------|
| Hébergement backend | 10-20€/mois |
| Database MySQL | 10€/mois |
| Redis Cache | 5€/mois |
| API Football | 0-30€/mois |
| Domaine .com | 12€/an |
| **TOTAL** | **~40-60€/mois** |

---

## 📈 10. INDICATEURS DE SUCCÈS (KPIs)

| Métrique | Objectif |
|----------|----------|
| Utilisateurs actifs/mois | 1000+ (3 mois) |
| Temps de chargement | < 2 secondes |
| Taux de rebond | < 40% |
| Sessions moyennes | 5 min+ |
| Notifications envoyées | 10000+/jour |
| Score Lighthouse | > 90/100 |

---

## 🔒 11. SÉCURITÉ

### 11.1 Mesures

```
✅ HTTPS obligatoire
✅ Sanitization des inputs
✅ Protection CSRF
✅ Rate limiting API (60 req/min)
✅ Validation côté serveur
✅ Hash bcrypt pour mots de passe
✅ Tokens JWT pour auth
✅ CORS configuré
✅ Protection XSS
✅ Backup quotidien DB
```

---

## 📞 12. CONTACTS & RESSOURCES

### Documentation
- Laravel: https://laravel.com/docs
- React: https://react.dev
- API-Football: https://www.api-football.com/documentation

### Inspiration Design
- Sofascore.com
- Flashscore.com
- ESPN.com

---

## ✅ 13. CRITÈRES DE VALIDATION

Le projet sera considéré comme terminé quand :

- [ ] Toutes les fonctionnalités priorité ⭐⭐⭐ sont implémentées
- [ ] Tests unitaires passent à 80%+
- [ ] Performance Lighthouse > 90
- [ ] Application responsive (mobile/tablet/desktop)
- [ ] Documentation API complète
- [ ] Déployé en production
- [ ] 0 bug critique

---

## 📝 14. ANNEXES

### 14.1 Diagramme Cas d'Utilisation

```
         ┌──────────────────┐
         │   Utilisateur    │
         └────────┬─────────┘
                  │
      ┌───────────┼───────────┐
      │           │           │
      ▼           ▼           ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│Consulter│ │ Suivre  │ │Recevoir │
│ Matchs  │ │Favoris  │ │ Notifs  │
└─────────┘ └─────────┘ └─────────┘


         ┌──────────────────┐
         │  Administrateur  │
         └────────┬─────────┘
                  │
      ┌───────────┼───────────┐
      │           │           │
      ▼           ▼           ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│  Gérer  │ │Configurer│ │Consulter│
│Utilisat.│ │   APIs   │ │  Stats  │
└─────────┘ └─────────┘ └─────────┘
```

### 14.2 Exemple Flux Utilisateur

**Scénario : Utilisateur veut suivre son équipe favorite**

1. Utilisateur se connecte
2. Recherche son équipe (ex: "Real Madrid")
3. Clique sur profil de l'équipe
4. Clique sur "Suivre cette équipe" ⭐
5. Active les notifications pour les matchs
6. Reçoit alerte 30min avant le match
7. Consulte le match en direct
8. Reçoit notification à chaque but

---

**Document rédigé le :** 03/10/2025  
**Version :** 1.0  
**Auteur :** Badr Eddine Binoua  
**Projet :** LiveScore Platform  
**Email :** badrbinoua07@gmail.com

---

## 🎯 PROCHAINES ÉTAPES

1. ✅ Valider ce cahier des charges
2. 📋 Créer un repo GitHub
3. 🛠️ Setup environnement développement
4. 🎨 Créer maquettes Figma (optionnel)
5. 💻 Commencer le développement (Semaine 1)

**Bon développement ! 🚀⚽**
```

---

## 📌 Instructions pour créer le fichier :

1. **Créez un nouveau fichier** dans la racine de votre projet
2. **Nommez-le** : `CAHIER_DES_CHARGES_LIVESCORE.md`
3. **Copiez-collez** tout le contenu ci-dessus
4. **Sauvegardez** le fichier

Vous pouvez également créer une version PDF en utilisant des outils comme :
- **Pandoc** : `pandoc CAHIER_DES_CHARGES_LIVESCORE.md -o cahier_des_charges.pdf`
- **VS Code Extension** : "Markdown PDF"
- **En ligne** : https://www.markdowntopdf.com/

Le fichier est maintenant prêt à être utilisé comme référence pour votre projet ! 📋✨
