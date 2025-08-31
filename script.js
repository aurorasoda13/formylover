window.onload = function() {
  const messages = [
    "Supererò le correnti gravitazionali \nLo spazio e la luce per non farti invecchiare \nE guarirai da tutte le malattie \nPerché sei un essere speciale \nEd io, avrò cura di te\n-Battiato",
    "Ma io ho bisogno di voi\nCome la terra del sole\nE ho bisogno di voi\nPerché mi serve una mano\nPer arrivare lontano\nE ho bisogno di voi\nPer confidarvi un segreto\nPerché io senza di voi\nNo, non sono completo\n-Stadio",
    "You're crazy and I'm out of my mind\n'Cause all of me\nLoves all of you\nLove your curves and all your edges\nAll your perfect imperfections\nGive your all to me\nI'll give my all to you\nYou're my end and my beginning\nEven when I lose, I'm winning\n-John Legend",
    "How many times do I have to tell you?\nEven when you're crying, you're beautiful to\nThe world is beating you down, I'm around through every mood\nYou're my downfall, you're my muse\nMy worst distraction, my rhythm and blues\n-Jhon Legend",
    "Don't read the last page\nBut I stay when you're lost, and I'm scared, and you're turning away\nI want your midnights\nBut I'll be cleaning up bottles with you on New Year's Day\n-\Taylor Swift",
    "So che per starti accanto\nIo di tutto farei, la vita darei\nE non avrei alcun rimpianto",
    "La senti questa voce\nChi canta è il mio cuore\nAmore, amore, amore\nÈ quello che so dire\nMa tu mi capirai\n-Nicola di Bari",
    "La prima cosa bella\nChe ho avuto dalla vita\nÈ il tuo sorriso giovane, sei tu\nTra gli alberi una stella\nLa notte si è schiarita\nIl cuore innamorato sempre più\n-Nicola di Bari",
    "I was made for lovin’ you, baby, you were made for lovin’ me\nAnd I can’t get enough of you, baby, can you get enough of me?\n-Kiss",
    "Quando impari a sopravvivere\nE accetti l'impossibile\nNessuno ci crede\nIo sì\nNon lo so, io\nChe destino è il tuo\nMa se vuoi\nSe mi vuoi sono qui\nNessuno ti sente\nMa io sì\n-Laura Pausini",
    "Mentre fuori sta impazzendo tutta la città\nVoglio solamente starti accanto\nAnche quando questa vita prova a metterci paura\nGlielo insegneremo noi\n-Alessandra Amoroso",
    "Il nostro tempo non si può rubare\nFatto di tutto il meglio e il peggio di noi\nE sul mio viso c'è la tua espressione\nLe tue parole come io le direi\nLento, sento\nIl tuo respiro che si calma col mio\nUn altro inverno e stiamo ancora insieme\nUn altro freddo che non sento con te\n-Alessandra Amoroso",
    "Amore, stringimi, stringimi\nTienimi ancora così e\nScusami, scusami\nSe non sono riuscita mai\nNemmeno a dirti che\nNon m'importa niente, non m'importa della gente\nCiò che voglio veramente è solo stringerti di più\nIo non ho mai provato niente di così profondo per nessuno mai\nCon te mi sento come una bambina, una promessa, una bugia\nLa verità è che dovrei stringerti di più\nIo me ne accorgo solo adesso che ti amo come non ti ho amato mai\nCome mai\n-Giorgia",
    "Tu mi fai sentire un po' speciale\nAnche tra miliardi di persone\nSai che io ti riconoscerei\nCome una stella in mezzo a un cielo di cartone\nE dovessi perdermi, perdermi\nMille anni luce da qui\nAmore, stringimi, stringimi\nTienimi ancora così\n-Giorgia",
  
  ];

  const toggleInput = document.getElementById('toggle-treasure');
  const messageContainer = document.getElementById('message-container');
  const randomMessageElement = document.getElementById('random-message');

  function handleTreasureToggle() {
    const isChecked = toggleInput.checked;

    if (isChecked) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const formattedMessage = randomMessage.replace(/\n/g, '<br>'); // Apply the replacement here
      randomMessageElement.innerHTML = formattedMessage; // Use innerHTML to render the <br> tags
      messageContainer.classList.add('show');
    } else {
      messageContainer.classList.remove('show');
    }
  }
  
  toggleInput.addEventListener('change', handleTreasureToggle);
};