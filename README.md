# Wildcards

## Spec
Wildcards allows you to `*card` (read: wildcard) locations on a map along with an optional comment. The user is first presented with a simple screen with a few common `*cards` as buttons.  These buttons serve as a method to quickly tag a situation via a `*card`. Users can then visualize one or multiple `*cards` of their choosing on a map.  Also, we will provide a map interface so users can `*card` locations by dropping a pin. The app should post to facebook, twitter, google+ when a user `*cards` something.  `*cards` are not restricted to suffixes of '*', they can be prefixes, suffixes, or any combination thereof (e.g. a*hole, p*thole, 311*issue).  The location of the '*' has no bearing on the meaning of the tag. For example, a*hole is equivalent to *ahole and 311*issue is equivalent to *311issue. Each`*card` consists of the `*card` itself, gps coordinates, and an optional comment. 

## Technology
The application will be built as an html 5 app supported by EmberJS on the frontend and rails json api on the backend.

A native iPhone client is a stretch goal. The rails api should be written such that integration is simple.

## potential use cases
* 311 would like to view recent reports of incidents (water main damage, potholes, trash)
* Bob wants to tell 311 that his trash wasn't picked up so they `*card` 311*trash
* Bobbette is standing in a long line at Torchy's longing for the short wait of Istanbul so she `*cards` "long*line at torchy's, wish I had gone to Istanbul :("
* Make lists of wildcards (sushi happy hours)
