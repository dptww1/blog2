class SiteVars < Bridgetown::Generator

  priority :lowest

  def generate(site)
    site.config["feed"] = {} unless site.config["feed"]
    site.config["feed"].excerpt_only = true
  end
end
