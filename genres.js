let navImages = document.querySelectorAll('.icon');

let mainText = document.querySelector('#genres');

function hiphop() {
  document.getElementById("h2").innerHTML = "Hip Hop Music";
  document.getElementById("p1").innerHTML = "Hip hop music or hip-hop music, also known as rap music, is a genre of popular music that originated in New York City in the 1970s. It consists of stylized rhythmic music (usually built around drum beats) that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted. It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti writing. Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmic beatboxing.";
  document.getElementById("p2").innerHTML = "While often used to refer solely to rapping, hip hop more properly denotes the practice of the entire subculture.The term hip hop music is sometimes used synonymously with the term rap music, though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks.";
}

function pop() {
  document.getElementById("h2").innerHTML = "Pop Music";
  document.getElementById("p1").innerHTML = "Pop music is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom.[4] The terms popular music and pop music are often used interchangeably, although the former describes all music that is popular and includes many disparate styles. During the 1950s and 1960s, pop music encompassed rock and roll and the youth-oriented styles it influenced. Rock and pop music remained roughly synonymous until the late 1960s, after which pop became associated with music that was more commercial, ephemeral, and accessible.";
  document.getElementById("p2").innerHTML = "Although much of the music that appears on record charts is considered to be pop music, the genre is distinguished from chart music. Identifying factors usually include repeated choruses and hooks, short to medium-length songs written in a basic format (often the verse-chorus structure), and rhythms or tempos that can be easily danced to. Much pop music also borrows elements from other styles such as rock, urban contemporary (R&B/hip-hop), dance, Latin, and country";
}

function instrumental() {
  document.getElementById("h2").innerHTML = "Instrumental Music";
  document.getElementById("p1").innerHTML = "An instrumental is a recording normally without any vocals, although it might include some inarticulate vocals, such as shouted backup vocals in a big band setting. Through semantic widening, a broader sense of the word song may refer to instrumentals. The music is primarily or exclusively produced using musical instruments.";
  document.getElementById("p2").innerHTML = "An instrumental can exist in music notation, after it is written by a composer; in the mind of the composer (especially in cases where the composer themselves will perform the piece, as in the case of a blues solo guitarist or a folk music fiddle player); as a piece that is performed live by a single instrumentalist or a musical ensemble, which could range in components from a duo or trio to a large big band, concert band or orchestra. Some genres that typically fall into this category include classical, jazz, and blues music.";
}

function rock() {
  document.getElementById("h2").innerHTML = "Rock Music";
  document.getElementById("p1").innerHTML = "Rock music is a broad genre of popular music that originated as rock and roll in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and United Kingdom.It has its roots in 1940s and 1950s rock and roll, a style that drew directly from the blues and rhythm and blues genres of African-American music and from country music. Rock also drew strongly from a number of other genres such as electric blues and folk, and incorporated influences from jazz, classical, and other musical styles.";
  document.getElementById("p2").innerHTML = "For instrumentation, rock has centered on the electric guitar, usually as part of a rock group with electric bass guitar, drums, and one or more singers. Usually, rock is song-based music with a time signature using a verse–chorus form, but the genre has become extremely diverse. Like pop music, lyrics often stress romantic love but also address a wide variety of other themes that are frequently social or political.";
          }

function genre() {
  document.getElementById("h2").innerHTML = "Music Genres";
  document.getElementById("p1").innerHTML = "A music genre is a conventional category that identifies some pieces of music as belonging to a shared tradition or set of conventions. It is to be distinguished from musical form and musical style, although in practice these terms are sometimes used interchangeably.";
  document.getElementById("p2").innerHTML = "Music can be divided into genres in varying ways, such as popular music and rock music, or hip hop music and instrumental music. The artistic nature of music means that these classifications are often subjective and controversial, and some genres may overlap.";
}
        
navImages[0].addEventListener('click', hiphop);
navImages[1].addEventListener('click', pop);
navImages[2].addEventListener('click', instrumental);
navImages[3].addEventListener('click', rock);
navImages[4].addEventListener('click', genre);