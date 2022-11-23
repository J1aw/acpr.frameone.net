# FAQs
#### What is this site?
This is a website that can access a large repository of Guilty Gear XX Accent Core +R replay files.

#### What replays?
Anyone is free to upload their own replays. To do this, use the Upload tab and submit a zip file of your .ggr replay files. In addition to this, any matches viewed on [twitch.tv/ggxxacpr](https://twitch.tv/ggxxacpr) are added to this database as well.

#### Why can't I find [this] replay?
The match is either viewed as invalid by the process that extracts the metadata from the file and discarded, or the search did not match. Replays from before December 2021 will need to be rewatched in full to generate valid metadata.

In addtion, some names that use characters that are not able to be properly encoded/decoded in UTF-8 are replaced with "�". You can still search via steamID or by inserting that character where a non UTF-8 character is present. If you believe there is a mistake in the name encoding let me know [on Twitter](https://twitter.com/prspekt).

#### Why does it only return a fixed amount of matches?
To keep things fast and orderly, queries return 100-200 matches depending on query type. If you feel you're having a hard time finding a particular match because of this, let me know [on Twitter](https://twitter.com/prspekt).

#### That was very nice of you to make this.
Thank you, I thought it would be cool.

#### Why is it broken?
Something went wrong, I will fix it when I can, sorry. Feel free to let me know [on Twitter](https://twitter.com/prspekt).

#### Can I support you for doing this?
This actually is a very cost efficient website. If you're still inclinded to offer support a follow is fine.

#### Who are you?
[twitch.tv/prospekt](https://twitch.tv/prospekt)

[@prspekt on Twitter](https://twitter.com/prspekt)

[prospekt on YouTube](https://www.youtube.com/channel/UCCO_DP32pnyS5ZTJZISJGgA)

# Query Types
### All query types can use the date and "seen on ggxxacpr" parameters.

#### Player
returns all matches by a particular player using their steam name at the time of the match.

#### Player Character
returns all matches by a particular player playing a particular character using their steam name at the time of the match.

#### Matchup
returns all matches played by one character vs another character.

#### PlayerSteamID Character
returns all matches player by a particular player playing a particular character using their [steamID64 in decimal format](https://www.steamidfinder.com/) at the time of the match. This is useful for players that change their name frequently.

#### Player Character vs Character
returns all matches by a particular player playing a particular character against a particular character using their steam name at the time of the match.

#### PlayerSteamID Character vs Character
returns all matches by a particular player playing a particular character against a particular character using their [steamID64 in decimal format](https://www.steamidfinder.com/) at the time of the match. This is useful for players that change their name frequently.

#### Player vs Character
returns all matches by a particular player playing against a particular character using their steam name at the time of the match.

#### PlayerSteamID vs Character
returns all matches by a particular player playing against a particular character using their [steamID64 in decimal format](https://www.steamidfinder.com/) at the time of the match. This is useful for players that change their name frequently.

#### Player vs Player
returns all matches by a particular player playing against a particular player using their steam names at the time of the match.

#### Player Character vs Player Character
returns all matches by a particular player playing against a particular player using particular characters using their steam names at the time of the match.

#### PlayerSteamID Character vs PlayerSteamID Character
returns all matches by a particular player playing against a particular player using particular characters using their [steamID64 in decimal format](https://www.steamidfinder.com/) at the time of the match. This is useful for players that change their name frequently.
