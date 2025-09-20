local repo = "https://raw.githubusercontent.com/violin-suzutsuki/LinoriaLib/main/"

local Library = loadstring(game:HttpGet("https://gist.githubusercontent.com/familiadigitalg-maker/fdb172251d874af180dcededce31cd69/raw/c569d9d2a8c7b0759dc81f33c11985c0beb6ba89/Library"))()
local ThemeManager = loadstring(game:HttpGet("https://gist.githubusercontent.com/familiadigitalg-maker/f8b28817c2dc643b384deea8cba0247e/raw/7d7e1bcfc51445ef7875c9255b4f6ab800930236/ThemeManager"))()
local SaveManager = loadstring(game:HttpGet(repo .. "addons/SaveManager.lua"))()
    local Window =
        Library:CreateWindow(
        {
            Title = "Move Hub | Fast Custom Script",
            Center = true,
            AutoShow = true,
            TabPadding = 0,
            MenuFadeTime = 0.2
        }
    )

    local Tabs = {
        Main = Window:AddTab("Main"),
        UISettings = Window:AddTab("UI Settings")
    }

local FastCustomBox = Tabs.Main:AddLeftTabbox()
local FastCustom = FastCustomBox:AddTab("Fast Custom")

local connection
local isActive = false -- Flag que controla se o script está ativo

FastCustom:AddToggle('SetGround', {
    Text = 'Perfect Set Antenna',
    Default = false,
    Callback = function(Toggle)
        isActive = Toggle -- Define o estado imediatamente
        
        if Toggle then
            local RunService = game:GetService("RunService")
            local Players = game:GetService("Players")
            local ReplicatedStorage = game:GetService("ReplicatedStorage")

            local LocalPlayer = Players.LocalPlayer
            local character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
            local humanoidRoot = character:WaitForChild("HumanoidRootPart")
            local humanoid = character:WaitForChild("Humanoid")
            local camera = workspace.CurrentCamera

            local animationsToWatch = {
                ReplicatedStorage.Assets.Animations.Set.Default.Back,
                ReplicatedStorage.Assets.Animations.Set.Default.Front,
            }

            local courts = {
                workspace:WaitForChild("First Court"),
                workspace:WaitForChild("Center Court"),
                workspace:WaitForChild("Third Court"),
            }

            local balls = {}
            for _, obj in ipairs(workspace:GetChildren()) do
                if obj:IsA("BasePart") and obj.Name == "BallPart" then
                    table.insert(balls, obj)
                end
            end

            local activeTracks = {}

            local function findPartAlignedWithVector(court, direction)
                local bestPart = nil
                local bestDot = -math.huge
                for _, part in ipairs(court:GetDescendants()) do
                    if part:IsA("BasePart") then
                        local size = part.Size
                        if math.abs(size.X - 0.8) < 0.01 and math.abs(size.Y - 0.2) < 0.01 and math.abs(size.Z - 0.2) < 0.01 then
                            local toPart = (part.Position - humanoidRoot.Position).Unit
                            local dot = toPart:Dot(direction)
                            if dot > bestDot then
                                bestDot = dot
                                bestPart = part
                            end
                        end
                    end
                end
                return bestPart
            end

            local function findClosestBall(maxDistance)
                local closestBall = nil
                local closestDist = maxDistance
                for _, ball in ipairs(balls) do
                    if ball.Parent then
                        local dist = (ball.Position - humanoidRoot.Position).Magnitude
                        if dist < closestDist then
                            closestDist = dist
                            closestBall = ball
                        end
                    end
                end
                return closestBall
            end

            local function detectCurrentCourt()
                local closestCourt = nil
                local closestDistance = math.huge
                for _, court in ipairs(courts) do
                    local primaryPart = court:FindFirstChildWhichIsA("BasePart") or court:FindFirstChild("Part")
                    if primaryPart then
                        local distance = (humanoidRoot.Position - primaryPart.Position).Magnitude
                        if distance < closestDistance then
                            closestDistance = distance
                            closestCourt = court
                        end
                    end
                end
                return closestCourt
            end

            -- Só cria conexão se não existir uma
            if not connection then
                connection = RunService.RenderStepped:Connect(function()
                    -- PRIMEIRA COISA: verifica se está ativo
                    if not isActive then return end
                    
                    if humanoid.FloorMaterial == Enum.Material.Air then
                        activeTracks = {}
                        return
                    end

                    for _, track in ipairs(humanoid:GetPlayingAnimationTracks()) do
                        if track.Animation and table.find(animationsToWatch, track.Animation) then
                            activeTracks[track] = true
                        end
                    end

                    for track, _ in pairs(activeTracks) do
                        if not track.IsPlaying then
                            activeTracks[track] = nil
                        end
                    end

                    if not next(activeTracks) then return end

                    local currentCourt = detectCurrentCourt()
                    if not currentCourt then return end

                    local closestBall = findClosestBall(50)

                    for track, _ in pairs(activeTracks) do
                        local isFront = track.Animation == ReplicatedStorage.Assets.Animations.Set.Default.Front
                        local direction = isFront and camera.CFrame.LookVector or -camera.CFrame.LookVector

                        local bestPart = findPartAlignedWithVector(currentCourt, direction)
                        if bestPart then
                            local targetPos = Vector3.new(bestPart.Position.X, humanoidRoot.Position.Y, bestPart.Position.Z)

                            if closestBall then
                                local offset = closestBall.Position - humanoidRoot.Position
                                targetPos = targetPos + Vector3.new(offset.X, 0, offset.Z) * 0.5
                            end

                            local lookVector = isFront and (targetPos - humanoidRoot.Position).Unit
                                                           or (humanoidRoot.Position - targetPos).Unit

                            humanoidRoot.CFrame = CFrame.lookAt(humanoidRoot.Position, humanoidRoot.Position + lookVector)
                        end
                    end
                end)
            end
        else
            -- Quando desliga, para TUDO completamente
            isActive = false
            if connection then
                connection:Disconnect()
                connection = nil
            end
        end
    end
})

local connection
local isActive = false

FastCustom:AddToggle('SetGround', {
    Text = 'Perfect Set Net',
    Default = false,
    Callback = function(Toggle)
        isActive = Toggle

        if Toggle then
            local RunService = game:GetService("RunService")
            local Players = game:GetService("Players")
            local ReplicatedStorage = game:GetService("ReplicatedStorage")

            local LocalPlayer = Players.LocalPlayer
            local character = LocalPlayer.Character or LocalPlayer.CharacterAdded:Wait()
            local humanoidRoot = character:WaitForChild("HumanoidRootPart")
            local humanoid = character:WaitForChild("Humanoid")
            local camera = workspace.CurrentCamera

            local animationsToWatch = {
                ReplicatedStorage.Assets.Animations.Set.Default.Back,
                ReplicatedStorage.Assets.Animations.Set.Default.Front,
            }

            local courts = {
                workspace:WaitForChild("First Court"),
                workspace:WaitForChild("Center Court"),
                workspace:WaitForChild("Third Court"),
            }

            local balls = {}
            for _, obj in ipairs(workspace:GetChildren()) do
                if obj:IsA("BasePart") and obj.Name == "BallPart" then
                    table.insert(balls, obj)
                end
            end

            -- Referências fixas por quadra
            local referencePositionsByCourt = {
                ["First Court"] = {
                    Vector3.new(122.9998, 7.7249, -0.000015),
                    Vector3.new(77.0003, 7.7250, -0.000015)
                },
                ["Center Court"] = {
                    Vector3.new(23.0001, 7.7249, -0.000244),
                    Vector3.new(-22.9993, 7.7250, -0.000244)
                },
                ["Third Court"] = {
                    Vector3.new(-77.0007, 7.7250, 0),
                    Vector3.new(-123.0002, 7.7251, 0)
                }
            }

            -- Detecta a quadra mais próxima
            local function detectCurrentCourt()
                local closestCourt = nil
                local closestDistance = math.huge
                for _, court in ipairs(courts) do
                    local primaryPart = court:FindFirstChildWhichIsA("BasePart") or court:FindFirstChild("Part")
                    if primaryPart then
                        local distance = (humanoidRoot.Position - primaryPart.Position).Magnitude
                        if distance < closestDistance then
                            closestDistance = distance
                            closestCourt = court
                        end
                    end
                end
                return closestCourt
            end

            -- Encontra a bola mais próxima
            local function findClosestBall(maxDistance)
                local closestBall = nil
                local closestDist = maxDistance
                for _, ball in ipairs(balls) do
                    if ball.Parent then
                        local dist = (ball.Position - humanoidRoot.Position).Magnitude
                        if dist < closestDist then
                            closestDist = dist
                            closestBall = ball
                        end
                    end
                end
                return closestBall
            end

            -- Escolhe a referência mais alinhada com lookVector
            local function findReferenceAligned(court, lookVector, isFront)
                local references = referencePositionsByCourt[court.Name]
                if not references then return nil end

                local bestRef = nil
                local bestProj = isFront and -math.huge or math.huge

                for _, refPos in ipairs(references) do
                    local toRef = refPos - humanoidRoot.Position
                    local proj = toRef:Dot(lookVector)

                    if isFront then
                        -- Front set: maior projeção positiva
                        if proj > bestProj then
                            bestProj = proj
                            bestRef = refPos
                        end
                    else
                        -- Back set: menor projeção negativa (costas para referência)
                        if proj < bestProj then
                            bestProj = proj
                            bestRef = refPos
                        end
                    end
                end

                return bestRef
            end

            if not connection then
                connection = RunService.RenderStepped:Connect(function()
                    if not isActive then return end
                    if humanoid.FloorMaterial == Enum.Material.Air then return end

                    local currentCourt = detectCurrentCourt()
                    if not currentCourt then return end

                    local closestBall = findClosestBall(50)

                    for _, track in ipairs(humanoid:GetPlayingAnimationTracks()) do
                        if track.Animation and table.find(animationsToWatch, track.Animation) then
                            local isFront = track.Animation == ReplicatedStorage.Assets.Animations.Set.Default.Front
                            local lookVector = camera.CFrame.LookVector

                            local bestRef = findReferenceAligned(currentCourt, lookVector, isFront)
                            if bestRef then
                                local targetPos = Vector3.new(bestRef.X, humanoidRoot.Position.Y, bestRef.Z)

                                if closestBall then
                                    local offset = closestBall.Position - humanoidRoot.Position
                                    targetPos = targetPos + Vector3.new(offset.X, 0, offset.Z) * 0.5
                                end

                                -- Front: olha para a referência
                                -- Back: fica de costas para a referência
                                local finalLook
                                if isFront then
                                    finalLook = (targetPos - humanoidRoot.Position).Unit
                                else
                                    finalLook = (humanoidRoot.Position - targetPos).Unit
                                end

                                humanoidRoot.CFrame = CFrame.lookAt(humanoidRoot.Position, humanoidRoot.Position + finalLook)
                            end
                        end
                    end
                end)
            end

        else
            isActive = false
            if connection then
                connection:Disconnect()
                connection = nil
            end
        end
    end
})

















    
-- UI Settings --
local MenuGroup = Tabs.UISettings:AddLeftGroupbox('Move UI')
MenuGroup:AddButton('Unload Move Hub', function()
    Library:Unload()
end) 
MenuGroup:AddLabel('Keybind')
:AddKeyPicker('MenuKeybind', {Default = 'RightShift', NoUI = true, Text = 'Menu keybind'})
Library.ToggleKeybind = Options.MenuKeybind
ThemeManager:SetLibrary(Library)
SaveManager:SetLibrary(Library)
SaveManager:IgnoreThemeSettings()
SaveManager:SetIgnoreIndexes({'MenuKeybind'})
ThemeManager:SetFolder('SushiHub')
SaveManager:SetFolder('SushiHub/SushiHub-Settings')
SaveManager:BuildConfigSection(Tabs.UISettings)
ThemeManager:ApplyToTab(Tabs.UISettings)
SaveManager:LoadAutoloadConfig()
