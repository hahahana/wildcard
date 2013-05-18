class PreSeed < Mongoid::Migration
  def self.up    
    tabfile = Rails.root.join('public', 'locations-small.txt')
    
    File.open(tabfile).each do |line|
      source, tag, name, address, date = line.strip.split("\t")
      
      s = Geocoder.search(address)
      puts s.to_s    
      if !s.empty? then
        puts "Adding " + s[0].address
        c = Card.create(:tag => tag, :location_name => name, :address =>s[0].address, :location => {:lat => s[0].latitude, :lng => s[0].longitude} )
      elsif s.empty? then
        puts "Skipping " + address
      end
    end
  end

  def self.down
    Card.delete_all
    puts "Rolled back. Is like rolled back."
  end
end