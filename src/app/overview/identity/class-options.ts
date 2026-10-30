// Indice di nomi e livelli delle classi 5e 2014; vedi attribuzione nel README.
export interface ClassOption {name:string;level:number;subclasses:{name:string;source:string}[]}
export const CLASS_OPTIONS: Record<string,ClassOption> = {
  "artificer": {
    "name": "Artificer",
    "level": 3,
    "subclasses": [
      {
        "name": "Alchemist",
        "source": "TCE"
      },
      {
        "name": "Armorer",
        "source": "TCE"
      },
      {
        "name": "Artillerist",
        "source": "TCE"
      },
      {
        "name": "Battle Smith",
        "source": "TCE"
      }
    ]
  },
  "barbarian": {
    "name": "Barbarian",
    "level": 3,
    "subclasses": [
      {
        "name": "Path of the Berserker",
        "source": "PHB"
      },
      {
        "name": "Path of the Totem Warrior",
        "source": "PHB"
      },
      {
        "name": "Path of the Battlerager",
        "source": "SCAG"
      },
      {
        "name": "Path of the Ancestral Guardian",
        "source": "XGE"
      },
      {
        "name": "Path of the Storm Herald",
        "source": "XGE"
      },
      {
        "name": "Path of the Zealot",
        "source": "XGE"
      },
      {
        "name": "Path of the Beast",
        "source": "TCE"
      },
      {
        "name": "Path of Wild Magic",
        "source": "TCE"
      },
      {
        "name": "Path of the Juggernaut",
        "source": "EGW"
      },
      {
        "name": "Path of the Giant",
        "source": "BGG"
      }
    ]
  },
  "bard": {
    "name": "Bard",
    "level": 3,
    "subclasses": [
      {
        "name": "College of Lore",
        "source": "PHB"
      },
      {
        "name": "College of Valor",
        "source": "PHB"
      },
      {
        "name": "College of Glamour",
        "source": "XGE"
      },
      {
        "name": "College of Swords",
        "source": "XGE"
      },
      {
        "name": "College of Whispers",
        "source": "XGE"
      },
      {
        "name": "College of Creation",
        "source": "TCE"
      },
      {
        "name": "College of Eloquence",
        "source": "TCE"
      },
      {
        "name": "College of Spirits",
        "source": "VRGR"
      }
    ]
  },
  "cleric": {
    "name": "Cleric",
    "level": 1,
    "subclasses": [
      {
        "name": "Knowledge Domain",
        "source": "PHB"
      },
      {
        "name": "Life Domain",
        "source": "PHB"
      },
      {
        "name": "Light Domain",
        "source": "PHB"
      },
      {
        "name": "Nature Domain",
        "source": "PHB"
      },
      {
        "name": "Tempest Domain",
        "source": "PHB"
      },
      {
        "name": "Trickery Domain",
        "source": "PHB"
      },
      {
        "name": "War Domain",
        "source": "PHB"
      },
      {
        "name": "Death Domain",
        "source": "DMG"
      },
      {
        "name": "Arcana Domain",
        "source": "SCAG"
      },
      {
        "name": "Forge Domain",
        "source": "XGE"
      },
      {
        "name": "Grave Domain",
        "source": "XGE"
      },
      {
        "name": "Order Domain",
        "source": "TCE"
      },
      {
        "name": "Peace Domain",
        "source": "TCE"
      },
      {
        "name": "Twilight Domain",
        "source": "TCE"
      },
      {
        "name": "Blood Domain",
        "source": "EGW"
      }
    ]
  },
  "druid": {
    "name": "Druid",
    "level": 2,
    "subclasses": [
      {
        "name": "Circle of the Land",
        "source": "PHB"
      },
      {
        "name": "Circle of the Moon",
        "source": "PHB"
      },
      {
        "name": "Circle of Dreams",
        "source": "XGE"
      },
      {
        "name": "Circle of the Shepherd",
        "source": "XGE"
      },
      {
        "name": "Circle of Spores",
        "source": "TCE"
      },
      {
        "name": "Circle of Stars",
        "source": "TCE"
      },
      {
        "name": "Circle of Wildfire",
        "source": "TCE"
      }
    ]
  },
  "fighter": {
    "name": "Fighter",
    "level": 3,
    "subclasses": [
      {
        "name": "Champion",
        "source": "PHB"
      },
      {
        "name": "Battle Master",
        "source": "PHB"
      },
      {
        "name": "Eldritch Knight",
        "source": "PHB"
      },
      {
        "name": "Purple Dragon Knight (Banneret)",
        "source": "SCAG"
      },
      {
        "name": "Arcane Archer",
        "source": "XGE"
      },
      {
        "name": "Cavalier",
        "source": "XGE"
      },
      {
        "name": "Samurai",
        "source": "XGE"
      },
      {
        "name": "Psi Warrior",
        "source": "TCE"
      },
      {
        "name": "Rune Knight",
        "source": "TCE"
      },
      {
        "name": "Echo Knight",
        "source": "EGW"
      }
    ]
  },
  "monk": {
    "name": "Monk",
    "level": 3,
    "subclasses": [
      {
        "name": "Way of the Open Hand",
        "source": "PHB"
      },
      {
        "name": "Way of Shadow",
        "source": "PHB"
      },
      {
        "name": "Way of the Four Elements",
        "source": "PHB"
      },
      {
        "name": "Way of the Long Death",
        "source": "SCAG"
      },
      {
        "name": "Way of the Sun Soul",
        "source": "XGE"
      },
      {
        "name": "Way of the Drunken Master",
        "source": "XGE"
      },
      {
        "name": "Way of the Kensei",
        "source": "XGE"
      },
      {
        "name": "Way of Mercy",
        "source": "TCE"
      },
      {
        "name": "Way of the Astral Self",
        "source": "TCE"
      },
      {
        "name": "Way of the Ascendant Dragon",
        "source": "FTD"
      },
      {
        "name": "Way of the Cobalt Soul",
        "source": "EGW"
      }
    ]
  },
  "paladin": {
    "name": "Paladin",
    "level": 3,
    "subclasses": [
      {
        "name": "Oath of Devotion",
        "source": "PHB"
      },
      {
        "name": "Oath of the Ancients",
        "source": "PHB"
      },
      {
        "name": "Oath of Vengeance",
        "source": "PHB"
      },
      {
        "name": "Oathbreaker",
        "source": "DMG"
      },
      {
        "name": "Oath of the Crown",
        "source": "SCAG"
      },
      {
        "name": "Oath of Conquest",
        "source": "XGE"
      },
      {
        "name": "Oath of Redemption",
        "source": "XGE"
      },
      {
        "name": "Oath of Glory",
        "source": "TCE"
      },
      {
        "name": "Oath of the Watchers",
        "source": "TCE"
      }
    ]
  },
  "ranger": {
    "name": "Ranger",
    "level": 3,
    "subclasses": [
      {
        "name": "Hunter",
        "source": "PHB"
      },
      {
        "name": "Beast Master",
        "source": "PHB"
      },
      {
        "name": "Gloom Stalker",
        "source": "XGE"
      },
      {
        "name": "Horizon Walker",
        "source": "XGE"
      },
      {
        "name": "Monster Slayer",
        "source": "XGE"
      },
      {
        "name": "Fey Wanderer",
        "source": "TCE"
      },
      {
        "name": "Swarmkeeper",
        "source": "TCE"
      },
      {
        "name": "Drakewarden",
        "source": "FTD"
      }
    ]
  },
  "rogue": {
    "name": "Rogue",
    "level": 3,
    "subclasses": [
      {
        "name": "Thief",
        "source": "PHB"
      },
      {
        "name": "Assassin",
        "source": "PHB"
      },
      {
        "name": "Arcane Trickster",
        "source": "PHB"
      },
      {
        "name": "Mastermind",
        "source": "XGE"
      },
      {
        "name": "Swashbuckler",
        "source": "XGE"
      },
      {
        "name": "Inquisitive",
        "source": "XGE"
      },
      {
        "name": "Scout",
        "source": "XGE"
      },
      {
        "name": "Phantom",
        "source": "TCE"
      },
      {
        "name": "Soulknife",
        "source": "TCE"
      }
    ]
  },
  "sorcerer": {
    "name": "Sorcerer",
    "level": 1,
    "subclasses": [
      {
        "name": "Draconic Bloodline",
        "source": "PHB"
      },
      {
        "name": "Wild Magic",
        "source": "PHB"
      },
      {
        "name": "Divine Soul",
        "source": "XGE"
      },
      {
        "name": "Shadow Magic",
        "source": "XGE"
      },
      {
        "name": "Storm Sorcery",
        "source": "XGE"
      },
      {
        "name": "Aberrant Mind",
        "source": "TCE"
      },
      {
        "name": "Clockwork Soul",
        "source": "TCE"
      }
    ]
  },
  "warlock": {
    "name": "Warlock",
    "level": 1,
    "subclasses": [
      {
        "name": "The Archfey",
        "source": "PHB"
      },
      {
        "name": "The Fiend",
        "source": "PHB"
      },
      {
        "name": "The Great Old One",
        "source": "PHB"
      },
      {
        "name": "The Undying",
        "source": "SCAG"
      },
      {
        "name": "The Celestial",
        "source": "XGE"
      },
      {
        "name": "The Hexblade",
        "source": "XGE"
      },
      {
        "name": "The Fathomless",
        "source": "TCE"
      },
      {
        "name": "The Genie",
        "source": "TCE"
      },
      {
        "name": "The Undead",
        "source": "VRGR"
      }
    ]
  },
  "wizard": {
    "name": "Wizard",
    "level": 2,
    "subclasses": [
      {
        "name": "School of Abjuration",
        "source": "PHB"
      },
      {
        "name": "School of Conjuration",
        "source": "PHB"
      },
      {
        "name": "School of Divination",
        "source": "PHB"
      },
      {
        "name": "School of Enchantment",
        "source": "PHB"
      },
      {
        "name": "School of Evocation",
        "source": "PHB"
      },
      {
        "name": "School of Illusion",
        "source": "PHB"
      },
      {
        "name": "School of Necromancy",
        "source": "PHB"
      },
      {
        "name": "School of Transmutation",
        "source": "PHB"
      },
      {
        "name": "Bladesinging",
        "source": "TCE"
      },
      {
        "name": "War Magic",
        "source": "XGE"
      },
      {
        "name": "Order of Scribes",
        "source": "TCE"
      },
      {
        "name": "Chronurgy Magic",
        "source": "EGW"
      },
      {
        "name": "Graviturgy Magic",
        "source": "EGW"
      }
    ]
  }
};
