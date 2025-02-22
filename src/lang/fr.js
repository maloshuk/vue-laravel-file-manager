/**
 * French translate
 * @type Object
 */
const fr = {
  btn: {
    about: 'À propos',
    back: 'Retour',
    cancel: 'Annuler',
    clear: 'Effacer',
    copy: 'Copier',
    cut: 'Couper',
    delete: 'Supprimer',
    edit: 'Modifier',
    forward: 'Suivant',
    folder: 'Nouveau dossier',
    file: 'Nouveau fichier',
    fullScreen: 'Plein écran',
    grid: 'Grille',
    paste: 'Coller',
    refresh: 'Rafraîchir',
    submit: 'Envoyer',
    table: 'Tableau',
    upload: 'Télécharger',
    uploadSelect: 'Sélectionner fichiers',
    hidden: ' Masquer fichiers',
  },
  clipboard: {
    actionType: 'Type',
    copy: 'Copier',
    cut: 'Coller',
    none: 'Aucune sélection',
    title: 'Clipboard',
  },
  contextMenu: {
    copy: 'Copier',
    cut: 'Coller',
    delete: 'Supprimer',
    download: 'Télécharger',
    info: 'Sélectionné:',
    open: 'Ouvrir',
    paste: 'Coller',
    properties: 'Propriétés',
    rename: 'Renommer',
    select: 'Sélectionner',
    view: 'Voir',
    zip: 'Zipper',
    unzip: 'Dézipper',
    edit: 'Modifier',
    audioPlay: 'Lire',
    videoPlay: 'Lire',
  },
  info: {
    directories: 'Dossiers:',
    files: 'Fichiers:',
    selected: 'Sélectionné:',
    selectedSize: 'Taille fichiers:',
    size: 'Taille fichiers:',
  },
  manager: {
    content: 'contenus',
    table: {
      date: 'Date',
      folder: 'Dossier',
      name: 'Nom',
      size: 'Taille',
      type: 'Type',
    },
  },
  modal: {
    about: {
      developer: 'Développeur',
      name: 'Laravel File Manager',
      title: 'À propos',
      version: 'Version',
    },
    delete: {
      noSelected: 'Aucune sélection!',
      title: 'Supprimer',
    },
    newFile: {
      fieldName: 'Nom du fichier',
      fieldFeedback: 'Ce fichier existe!',
      title: 'Créer un fichier',
    },
    newFolder: {
      fieldName: 'Nom du dossier',
      fieldFeedback: 'Ce dossier existe!',
      title: 'Créer un dossier',
    },
    preview: {
      title: 'Prévisualisation',
    },
    properties: {
      disk: 'Disque',
      modified: 'Modifié',
      name: 'Nom',
      path: 'Chemin',
      size: 'Taille',
      title: 'Propriétés',
      type: 'Type',
      url: 'URL',
      access: 'Accès',
      access_0: 'Accès refusé',
      access_1: 'Lecture seul',
      access_2: 'Lecture/écriture',
    },
    rename: {
      directoryExist: 'Dossier existant',
      fieldName: 'Entrer un nom',
      fieldFeedback: 'Nom invalide',
      fileExist: 'Fichier existant',
      title: 'Renommer',
    },
    status: {
      noErrors: 'Aucune erreurs!',
      title: 'Statut',
    },
    upload: {
      ifExist: 'Si le fichier existe:',
      noSelected: 'Aucun fichier sélectionné!',
      overwrite: 'Écraser!',
      selected: 'Sélectionné:',
      size: 'Taille:',
      skip: 'Passer',
      title: 'Télécharger fichiers',
      limit: 'Limite',
      overlimit: 'Dépassement de limite'
    },
    editor: {
      title: 'Editeur',
    },
    audioPlayer: {
      title: 'Lecteur audio',
    },
    videoPlayer: {
      title: 'Lecteur video',
    },
    zip: {
      title: 'Créer une archive',
      fieldName: 'Nom archive',
      fieldFeedback: 'Archive existante!',
    },
    unzip: {
      title: 'Extraite l\'archive',
      fieldName: 'Nom du dossier',
      fieldRadioName: 'Extraire vers:',
      fieldRadio1: 'Dossier actuel',
      fieldRadio2: 'Dans un nouveau dossier',
      fieldFeedback: 'Dossier existant!',
      warning: 'Attention! Si le nom correspond, les fichiers seront écrasés!',
    },
    cropper: {
      title: 'Recadrer',
      apply: 'Appliquer',
      reset: 'Réinitialisé',
      save: 'Sauvegarder',
    },
  },
  notifications: {
    cutToClipboard: 'Coller dans le presse-papier!',
    copyToClipboard: 'Copied dans le presse-papier!',
  },
  response: {
    noConfig: 'Configuration introuvable!',
    notFound: 'Introuvable!',
    diskNotFound: 'Disque introuvable!',
    pathNotFound: 'Chemin introuvable!',
    diskSelected: 'Disque sélectionné!',
    // files
    fileExist: 'Fichier existant!',
    fileCreated: 'Fichier créé!',
    fileUpdated: 'Fichier téléchargé!',
    fileNotFound: 'Fichier introuvable!',
    // directories
    dirExist: 'Dossier existant!',
    dirCreated: 'Dossier créé!',
    dirNotFound: 'Dossier introuvable',
    // actions
    uploaded: 'Tous les fichiers ont été téléchargés!',
    notAllUploaded: 'Certains fichiers n\'ont pas été téléchargés!',
    delNotFound: 'Certains éléments n\'ont pas été trouvés!',
    deleted: 'Supprimé!',
    renamed: 'Renommé!',
    copied: 'Copié!',
    // zip
    zipError: 'Erreur dans la création de l\'archive!',
    // acl
    aclError: 'Accès refusé!',
  },
};

export default fr;
